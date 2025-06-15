import FullLogo from "../../shared/ui/fulllogo/FullLogo";
import styles from "./styles.module.css";
import {github,  telegram } from "../../assets";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.infoBlock}>
          <FullLogo />
          <div className={styles.textGroup}>
            <p className={styles.description}>
              All information on this site is publicly available and has no copyright.
            </p>
            <p className={styles.signature}>abdyrakhman.zhumagylov@gmail.com</p>
            <p className={styles.signature}>amanturovnursultan458@gmail.com</p>
            <p className={styles.copyright}>© {new Date().getFullYear()} TwoDevs team</p>
          </div>
        </div>

        <div className={styles.socialBlock}>
          <a
            href="https://github.com/AbuZhuma/yuno-mfs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img src={github} alt="GitHub" className={styles.socialIcon} />
            GitHub
          </a>
          <a
            href="https://t.me/twodevstm"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img src={telegram} alt="telegram" className={styles.socialIcon} />
            Telegram
          </a>
          {/* <a
            href="https://www.youtube.com/channel/UCtTG_6zWsaSHfLoiD2wQLKw"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img src={youtube} alt="youtube" className={styles.socialIcon} />
            YouTube
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;