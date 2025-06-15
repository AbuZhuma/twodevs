import CreateRoom from "../create/CreateRoom"
import NetsAnimation from "../netsAnimation/NetsAnimation"
import styles from "./styles.module.css"

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1>TwoDevs — Full-Cycle Development Duo</h1>
        <p>We deliver end-to-end digital solutions - from high-converting landing pages to enterprise-grade CRM systems. Transforming your vision into robust technical implementations with clean architecture and pixel-perfect execution.</p>        <div className={styles.room}>
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
