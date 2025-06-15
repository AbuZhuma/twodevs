import CreateRoom from "../create/CreateRoom"
import NetsAnimation from "../netsAnimation/NetsAnimation"
import styles from "./styles.module.css"

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1>We are a team of two developers.</h1>
        <p>We do all types of work with the site. From developing landing pages to CRM systems, we connect everything. We will make your dreams come true!</p>
        <div className={styles.room}>
          <CreateRoom />
        </div>
      </div>
      <div className={styles.right}>
        <NetsAnimation />
      </div>
    </div>
  )
}

export default HeroSection
