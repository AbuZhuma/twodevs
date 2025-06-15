import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./styles.module.css";

interface Node {
  id: number;
  x: number;
  y: number;
  connections: number[];
  pulse: boolean;
  fading?: boolean;
}

interface Connection {
  id: string;
  from: number;
  to: number;
  active: boolean;
  fading?: boolean;
}

const NetsAnimation = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const nextId = useRef(0);

  const initializeNetwork = useCallback(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const nodeCount = 10 + Math.floor(Math.random() * 4);
    const newNodes: Node[] = [];
    nextId.current = 0;
    
    for (let i = 0; i < nodeCount; i++) {
      newNodes.push(createNode(dimensions));
    }

    setNodes(newNodes);
    setConnections(createInitialConnections(newNodes));
  }, [dimensions]);

  const createNode = (dimensions: { width: number; height: number }): Node => {
    return {
      id: nextId.current++,
      x: 50 + Math.random() * (dimensions.width - 100),
      y: 50 + Math.random() * (dimensions.height - 100),
      connections: [],
      pulse: false,
      fading: false,
    };
  };

  const createInitialConnections = (nodes: Node[]): Connection[] => {
    const newConnections: Connection[] = [];
    const maxConnections = 3;

    nodes.forEach(node => {
      const possibleTargets = nodes
        .filter(n => n.id !== node.id && n.connections.length < maxConnections)
        .filter(n => !node.connections.includes(n.id));

      if (possibleTargets.length > 0 && node.connections.length < maxConnections) {
        const target = possibleTargets[Math.floor(Math.random() * possibleTargets.length)];
        node.connections.push(target.id);
        target.connections.push(node.id);
        newConnections.push(createConnection(node.id, target.id));
      }
    });

    return newConnections;
  };

  const createConnection = (from: number, to: number): Connection => {
    return {
      id: `${from}-${to}`,
      from,
      to,
      active: false,
      fading: false,
    };
  };

const addNode = useCallback(() => {
      if (nodes.length >= 15) return; 
    
      setNodes(prevNodes => {
        const newNode = createNode(dimensions);
        const updatedNodes = [...prevNodes, newNode];
    
        const newConnections: Connection[] = [];
        const connectionCount = 1 + Math.floor(Math.random() * 2);
    
        for (let i = 0; i < connectionCount && i < prevNodes.length; i++) {
          const target = prevNodes[Math.floor(Math.random() * prevNodes.length)];
          if (!newNode.connections.includes(target.id)) { 
            newNode.connections.push(target.id);
            target.connections.push(newNode.id);
            newConnections.push(createConnection(newNode.id, target.id));
          }
        }
    
        setConnections(prev => [...prev, ...newConnections]);
        return updatedNodes;
      });
    }, [dimensions, nodes.length]);
  const removeNode = useCallback(() => {
    if (nodes.length <= 3) return; 
    setNodes(prevNodes => {
      const indexToRemove = Math.floor(Math.random() * prevNodes.length);
      const nodeToRemove = prevNodes[indexToRemove];

      const updatedNodes = prevNodes.map((node, i) => 
        i === indexToRemove ? { ...node, fading: true } : node
      );

      setTimeout(() => {
        setNodes(nodes => nodes.filter(n => n.id !== nodeToRemove.id));
        setConnections(conns => 
          conns.filter(c => c.from !== nodeToRemove.id && c.to !== nodeToRemove.id)
        );
      }, 1000);

      return updatedNodes;
    });
  }, [nodes.length]);

  const addConnection = useCallback(() => {
    setNodes(prevNodes => {
      const possiblePairs: [Node, Node][] = [];

      prevNodes.forEach(node1 => {
        prevNodes.forEach(node2 => {
          if (node1.id !== node2.id && !node1.connections.includes(node2.id)) {
            possiblePairs.push([node1, node2]);
          }
        });
      });

      if (possiblePairs.length > 0) {
        const [node1, node2] = possiblePairs[
          Math.floor(Math.random() * possiblePairs.length)
        ];

        node1.connections.push(node2.id);
        node2.connections.push(node1.id);

        setConnections(prev => [
          ...prev,
          createConnection(node1.id, node2.id)
        ]);
      }

      return [...prevNodes];
    });
  }, []);

  const removeConnection = useCallback(() => {
    if (connections.length <= 3) return;

    setConnections(prevConnections => {
      const indexToRemove = Math.floor(Math.random() * prevConnections.length);
      const connToRemove = prevConnections[indexToRemove];

      const updatedConnections = prevConnections.map((conn, i) => 
        i === indexToRemove ? { ...conn, fading: true } : conn
      );

      setTimeout(() => {
        setNodes(nodes => nodes.map(node => {
          if (node.id === connToRemove.from) {
            return {
              ...node,
              connections: node.connections.filter(id => id !== connToRemove.to)
            };
          }
          if (node.id === connToRemove.to) {
            return {
              ...node,
              connections: node.connections.filter(id => id !== connToRemove.from)
            };
          }
          return node;
        }));
        setConnections(conns => conns.filter(c => c.id !== connToRemove.id));
      }, 1000);

      return updatedConnections;
    });
  }, [connections.length]);

  const triggerPulse = useCallback(() => {
    setNodes(prevNodes => {
      if (prevNodes.length === 0) return prevNodes;
      
      const randomIndex = Math.floor(Math.random() * prevNodes.length);
      return prevNodes.map((node, i) => 
        i === randomIndex ? { ...node, pulse: true } : node
      );
    });

    setTimeout(() => {
      setNodes(prevNodes => prevNodes.map(node => ({ ...node, pulse: false })));
    }, 1000);
  }, []);

  const activateConnection = useCallback(() => {
    setConnections(prevConnections => {
      if (prevConnections.length === 0) return prevConnections;
      
      const randomIndex = Math.floor(Math.random() * prevConnections.length);
      return prevConnections.map((conn, i) => 
        i === randomIndex ? { ...conn, active: true } : conn
      );
    });

    setTimeout(() => {
      setConnections(prevConnections => 
        prevConnections.map(conn => ({ ...conn, active: false }))
      );
    }, 800);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    initializeNetwork();
  }, [initializeNetwork]);

  useEffect(() => {
    const intervals = [
      setInterval(triggerPulse, 1500),
      setInterval(activateConnection, 1200),
      setInterval(addNode, 5000),
      setInterval(removeNode, 5500),
      setInterval(addConnection, 3000),
      setInterval(removeConnection, 7000),
    ];

    return () => intervals.forEach(clearInterval);
  }, [triggerPulse, activateConnection, addNode, removeNode, addConnection, removeConnection]);

  return (
    <div className={styles.nets} ref={containerRef}>
      {connections.map(conn => {
        const fromNode = nodes.find(n => n.id === conn.from);
        const toNode = nodes.find(n => n.id === conn.to);
        
        if (!fromNode || !toNode) return null;

        return (
          <svg key={conn.id} className={styles.connectionContainer}>
            <line
              className={`${styles.connection} ${conn.active ? styles.active : ''} ${conn.fading ? styles.fadeOut : ''}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
            />
            {conn.active && (
              <circle
                className={styles.dataPacket}
                cx={fromNode.x}
                cy={fromNode.y}
                r="4"
              />
            )}
          </svg>
        );
      })}

      {nodes.map(node => (
        <div
          key={node.id}
          className={`${styles.node} ${node.pulse ? styles.pulse : ''} ${node.fading ? styles.fadeOut : ''}`}
          style={{
            left: `${node.x}px`,
            top: `${node.y}px`,
          }}
        >
          <div className={styles.nodeCore} />
          {node.pulse && <div className={styles.pulseRing} />}
        </div>
      ))}
    </div>
  );
};

export default NetsAnimation;