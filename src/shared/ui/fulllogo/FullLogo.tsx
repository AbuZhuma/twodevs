import { FC } from 'react'
import styles from "./styles.module.css"
import { black, blue } from '../../styles/colors'
import { useNavigate } from 'react-router-dom'

interface IFullLogo {
      h?: number,
      img?: "blue" | "black",
      className?:string
}

const FullLogo:FC<IFullLogo> = ({h=100, img="black", className}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate("/")} className={`${styles.conatiner} ${className}`} style={{height: h+"px"}}>
      <p className={styles.p} style={{fontSize:h/2+"px", color: img === "blue" ? blue : black }}>
      2<span>Devs</span>
      </p>
    </div>
  )
}

export default FullLogo
