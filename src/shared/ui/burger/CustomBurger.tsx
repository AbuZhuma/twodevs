import React, { useState, useEffect, ReactNode } from 'react';
import styles from './styles.module.css';

interface BurgerMenuProps {
      children: ReactNode;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ children }) => {
      const [isOpen, setIsOpen] = useState(false);

      useEffect(() => {
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
            return () => {
                  document.body.style.overflow = 'auto';
            };
      }, [isOpen]);

      useEffect(() => {
            const handleClickOutside = (e: MouseEvent) => {
                  const menu = document.querySelector(`.${styles.menuContent}`);
                  const burgerBtn = document.querySelector(`.${styles.burgerBtn}`);

                  if (
                        isOpen &&
                        menu &&
                        burgerBtn &&
                        !menu.contains(e.target as Node) &&
                        !burgerBtn.contains(e.target as Node)
                  ) {
                        setIsOpen(false);
                  }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
      }, [isOpen]);

      return (
            <div className={styles.burgerMenu}>
                  <button
                        className={`${styles.burgerBtn} ${isOpen ? styles.open : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                  >
                        <span></span>
                        <span></span>
                        <span></span>
                  </button>

                  <div className={`${styles.menuContent} ${isOpen ? styles.open : ''}`}>
                        <div className={styles.menuInner} onClick={() => setIsOpen(false)}>{children}</div>
                  </div>
            </div>
      );
};

export default BurgerMenu;