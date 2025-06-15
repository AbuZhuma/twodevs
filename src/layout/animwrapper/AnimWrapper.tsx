import React, { 
  useEffect, 
  useRef, 
  useState, 
  ReactNode, 
  HTMLAttributes,
  isValidElement,
  ElementType
} from 'react';
import styles from './styles.module.css';

interface OblProps {
  children: ReactNode;
  customClass?: string;
}
const Obl: React.FC<OblProps> = ({ children, customClass = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.obl} ${customClass} ${isVisible ? styles.show : ''}`}
    >
      {children}
    </div>
  );
};

interface AnimWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  element?: ElementType;
}

const AnimWrapper: React.FC<AnimWrapperProps> = ({ 
  children, 
  element: WrapperTag = 'div', 
  ...props 
}) => {
  return (
    <WrapperTag {...props}>
      {React.Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          const childProps = child.props as { className?: string };
          return (
            <Obl
              key={child.key || index}
              customClass={childProps.className || ''}
            >
              {child}
            </Obl>
          );
        }
        return child;
      })}
    </WrapperTag>
  );
};

export { AnimWrapper, Obl };