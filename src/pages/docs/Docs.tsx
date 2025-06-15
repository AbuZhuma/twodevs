import { useEffect, useState } from "react";
import { AnimWrapper } from "../../layout/animwrapper/AnimWrapper"
import CustomDoc from "../../shared/ui/doc/CustomDoc";
import CustomNav from "../../shared/ui/nav/CustomNav"
import styles from "./styles.module.css"
import docums from "./docums";
import BurgerMenu from "../../shared/ui/burger/CustomBurger";
import { useNavigate, useParams } from "react-router-dom";

const Docs = () => {
      const params = useParams()
      const navigate = useNavigate()
      const [windowWidth, setWindowWidth] = useState(window.innerWidth)
      useEffect(() => {
            if (!params.sel) {
                  navigate("/portfolio/" + "siroca-crm")
                  return
            }
            const handleResize = () => {
                  setWindowWidth(window.innerWidth);
            };
            window.addEventListener('resize', handleResize);
            return () => {
                  window.removeEventListener('resize', handleResize);
            };
      }, []);
      
      const navItems = [
            { id: 'getting-started', label: 'Our projects', isTitle: true },
            { id: 'siroca-crm', label: 'Siroca Crm' },
            { id: 'nft-marketplace', label: 'Nft marketplace' },
            { id: 'harmony-smile', label: 'Website for Dentistry' },
      ];
      const onClick = (id: string) => {
            navigate("/portfolio/" + id)
      }
      return (
            <AnimWrapper>
                  <div className={styles.docs}>
                        {windowWidth > 700 ?
                              <CustomNav
                                    items={navItems}
                                    orientation={"vertical"}
                                    activeId={params.sel}
                                    onItemClick={onClick}
                                    size={100}
                              /> :
                              <div className={styles.burger}>
                                    <BurgerMenu><CustomNav size={100} orientation="vertical" items={navItems} onItemClick={onClick} /></BurgerMenu>
                              </div>}

                        {params.sel && docums[params.sel] ?
                              <CustomDoc
                                    size={800}
                                    content={docums[params.sel]}
                              />
                              : null}
                  </div>

            </AnimWrapper>
      )
}

export default Docs
