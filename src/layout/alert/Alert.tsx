import { useEffect, useState } from 'react';
import { useLayoutStore } from '../api';
import styles from "./styles.module.css";

type AlertType = 'error' | 'warning' | 'info' | 'success';

const Alert = () => {
  const { alert, allertType = 'info', setAllert } = useLayoutStore();
  const [isVisible, setIsVisible] = useState(false);
  const [currentAlert, setCurrentAlert] = useState('');
  const [currentType, setCurrentType] = useState<AlertType>('info');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (alert) {
      if (isVisible) {
        setIsExiting(true);
        setTimeout(() => {
          setIsExiting(false);
          showNewAlert();
        }, 300); 
      } else {
        showNewAlert();
      }
    }
  }, [alert]);

  const showNewAlert = () => {
    setCurrentAlert(alert || '');
    setCurrentType(allertType || 'info');
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      startExitAnimation();
    }, 5000); 
    
    return () => clearTimeout(timer);
  };

  const startExitAnimation = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
      setAllert("", "info");
      setCurrentAlert("")
    }, 300);
  };

  if (!isVisible && !currentAlert) return null;

  return (
    <div className={`
      ${styles.alert} 
      ${styles[currentType]}
      ${isExiting ? styles.hide : styles.show}
    `}>
      <div className={styles.content}>
        <div className={styles.icon}>
          {getIcon(currentType)}
        </div>
        <span>{currentAlert}</span>
      </div>
      <button 
        className={styles.closeButton}
        onClick={startExitAnimation}
        aria-label="Close notification"
      >
        &times;
      </button>
    </div>
  );
};

const getIcon = (type: AlertType) => {
  switch(type) {
    case 'error': return <ErrorIcon />;
    case 'warning': return <WarningIcon />;
    case 'info': return <InfoIcon />;
    case 'success': return <SuccessIcon />;
    default: return <InfoIcon />;
  }
};

const ErrorIcon = () => <span>❌</span>;
const WarningIcon = () => <span>⚠️</span>;
const InfoIcon = () => <span>ℹ️</span>;
const SuccessIcon = () => <span>✅</span>;

export default Alert;