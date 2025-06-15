import { FC } from 'react';
import styles from './styles.module.css';

const LoadingSpinner: FC = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner_circle}></div>
      <div className={styles.spinner_circle}></div>
      <div className={styles.spinner_circle}></div>
      <div className={styles.spinner_text}>Loading</div>
    </div>
  );
};

export default LoadingSpinner;