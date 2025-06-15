import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const FeedbackAnimation = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [allActive, setAllActive] = useState(false);

  useEffect(() => {
  

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 3);
      
      setActiveIndex(randomIndex);
      setAllActive(false);

      setTimeout(() => {
        setAllActive(true);
        setTimeout(() => {
          setActiveIndex(null);
          setAllActive(false);
        }, 500);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.block_cont}>
        {[1,2,3].map((color, index) => (
          <div
            key={index}
            className={`${styles.block} ${color} ${
              activeIndex === index || allActive ? styles.animate : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackAnimation;