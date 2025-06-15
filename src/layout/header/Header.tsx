import { useNavigate } from "react-router-dom"
import FullLogo from "../../shared/ui/fulllogo/FullLogo"
import CustomNav from "../../shared/ui/nav/CustomNav"
import styles from "./styles.module.css"
import BurgerMenu from "../../shared/ui/burger/CustomBurger"
import { navItems } from "../../shared/configs"
import { useState } from "react"

const Header = () => {
      const navigate = useNavigate()
      const [active, setActive] = useState("/")
      const onClick = (item: string) => {
            navigate(item)
            setActive(item)
      }
      return (
            <header className={styles.header}>
                  <FullLogo h={100} />
                  <div className={styles.burger}>
                        <BurgerMenu><CustomNav size={100} orientation="vertical" items={navItems} onItemClick={onClick} /></BurgerMenu>
                  </div>
                  <div className={styles.nav}><CustomNav isOrd={true} activeId={active} size={100} orientation="horizontal" items={navItems} onItemClick={onClick} /></div>
            </header>
      )
}

export default Header
