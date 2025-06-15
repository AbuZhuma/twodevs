import styles from './styles.module.css';

export const PostSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonHeader}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonVersion}></div>
      </div>
      <div className={styles.skeletonMeta}>
        <div className={styles.skeletonDate}></div>
        <div className={styles.skeletonAuthor}></div>
      </div>
      <div className={styles.skeletonDescription}></div>
      <div className={styles.skeletonChangelog}></div>
    </div>
  );
};