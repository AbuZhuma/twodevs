import { useEffect, useState } from "react";
import { AnimWrapper } from "../../layout/animwrapper/AnimWrapper"
import CustomDoc from "../../shared/ui/doc/CustomDoc";
import CustomNav from "../../shared/ui/nav/CustomNav"
import styles from "./styles.module.css"
import docums from "./docums";
import BurgerMenu from "../../shared/ui/burger/CustomBurger";
import { useDocsStore } from "./api";

const Docs = () => {
      const {selected, select} = useDocsStore()
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);

      useEffect(() => {
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
            { id: 'siroca-crm', label: 'Siroca Crm'},
            { id: '', label: ''}
      ];
      const onClick = (id: string) => {
            docums[id] ? select(id) : null
      }
      return (
            <AnimWrapper>
                  <div className={styles.docs}>
                        {windowWidth > 700 ?
                              <CustomNav
                                    items={navItems}
                                    orientation={"vertical"}
                                    activeId="introduction"
                                    onItemClick={onClick}
                                    size={100}
                              /> :
                              <div className={styles.burger}>
                                    <BurgerMenu><CustomNav size={100} orientation="vertical" items={navItems} onItemClick={onClick} /></BurgerMenu>
                              </div>}

                        {docums[selected] ?
                              <CustomDoc
                                    size={800}
                                    content={docums[selected]}
                              />
                              : null}
                  </div>

            </AnimWrapper>
      )
}

export default Docs
