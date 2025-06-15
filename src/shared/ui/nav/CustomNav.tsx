import { useState } from 'react';
import styles from './styles.module.css';
import CustomButton from '../button/CustomButton';
import { useNavigate } from 'react-router-dom';

interface NavItem {
  id: string;
  label: string;
  isTitle?: boolean;
  isNew?: boolean;
}

interface CustomNavProps {
  items: NavItem[];
  orientation?: 'horizontal' | 'vertical';
  activeId?: string;
  onItemClick?: (id: string) => void;
  size?: number;
  isOrd?: boolean
}

const CustomNav = ({
  items,
  orientation = 'vertical',
  activeId,
  onItemClick,
  size = 100,
  isOrd
}: CustomNavProps) => {
  const [activeItem, setActiveItem] = useState(activeId);

  const handleItemClick = (id: string, isTitle?: boolean) => {
    if (isTitle) return;
    setActiveItem(id);
    if (onItemClick) onItemClick(id);
  };

  const navStyles = {
    '--nav-width': `${size}%`,
    '--font-size': `${12 + (size / 25)}px`,
    '--padding': `${8 + (size / 25)}px`,
    '--item-gap': `${4 + (size / 50)}px`,
    '--title-margin': `${30 * (size / 100)}px`,
    '--border-radius': `${4 * (size / 100)}px`,
    '--badge-size': `${10 + (size / 50)}px`
  } as React.CSSProperties;
  const navigate = useNavigate()
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  };
  return (
    <nav
      className={`${styles.nav} ${styles[orientation]}`}
      style={navStyles}
    >
      <ul className={styles.navList}>
        {items.map((item) => (
          <li
            key={item.id}
            className={`${styles.navItem} ${item.isTitle ? styles.title : ''
              } ${activeItem === item.id ? styles.active : ''}`}
            onClick={() => handleItemClick(item.id, item.isTitle)}
          >
            {item.label}
            {item.isNew && <span className={styles.newBadge}>🆕</span>}
          </li>
        ))}
        {isOrd && <CustomButton text="Order" size={60} onClick={async() => {
          navigate("/")
          setTimeout(() => {
            scrollToElement("fb")
          }, 300)
        }} />}
      </ul>
    </nav>
  );
};

export default CustomNav;