import { FC, ReactNode } from "react"
import styles from "./styles.module.css"
import { AnimWrapper } from "../../../layout/animwrapper/AnimWrapper"
import FeedbackAnimation from "../formanim/FeedbackAnimation"

interface IOneSection {
  children?: ReactNode,
  title?: string,
  className?: string,
  desc?: string,
  tri?: boolean
}

const OneSecton: FC<IOneSection> = ({ children, title, desc, className, tri = false }) => {
  return (
    <AnimWrapper className={`${styles.one} ${className}`}>
      <div className={styles.cont}>
        <div className={styles.title}>{title}  <span>{tri ? <FeedbackAnimation /> : null}</span></div>
        {desc ? <p className={styles.desc}>{desc}</p> : null}
      </div>
      <div className={styles.main}>
        {children}
      </div>
    </AnimWrapper>
  )
}

export default OneSecton
