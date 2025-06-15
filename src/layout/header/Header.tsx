import { useLocation, useNavigate } from "react-router-dom"
import FullLogo from "../../shared/ui/fulllogo/FullLogo"
import CustomNav from "../../shared/ui/nav/CustomNav"
import styles from "./styles.module.css"
import BurgerMenu from "../../shared/ui/burger/CustomBurger"
import { navItems } from "../../shared/configs"

const Header = () => {
      const navigate = useNavigate()
      const onClick = (item: string) => {
            navigate(item)
      }
      const loc = useLocation()
      const activeid = "/"+loc.pathname.split("/")[1]
      
      return (
            <header className={styles.header}>
                  <FullLogo h={100} />
                  <div className={styles.burger}>
                        <BurgerMenu><CustomNav size={100} activeId={activeid} orientation="vertical" items={navItems} onItemClick={onClick} /></BurgerMenu>
                  </div>
                  <div className={styles.nav}><CustomNav isOrd={true} activeId={activeid} size={100} orientation="horizontal" items={navItems} onItemClick={onClick} /></div>
            </header>
      )
}

export default Header
