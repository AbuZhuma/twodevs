import { FC } from "react"
import styles from "./styles.module.css"
interface ICustomButton{
      text: string, 
      size?: number, 
      onClick?: () => void
}

const CustomButton:FC<ICustomButton> = ({text="Documentation", size=40, onClick}) => {
  return (
    <div className={styles.container} style={{height: `${size-(size/100*10)}px`}}>
      <button onClick={onClick} className={styles.button} style={{minWidth: `${size*1.5}px`, fontSize: `${size/3}px`}}>{text}</button>
    </div>
  )
}

export default CustomButton
