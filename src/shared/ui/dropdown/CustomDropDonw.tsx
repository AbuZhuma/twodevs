import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

interface DropdownItem {
  value: string;
  label: string;
}

interface CustomDropDonwProps {
  items: DropdownItem[];
  placeholder?: string;
  onSelect?: (value: string) => void;
  size: number
}

const CustomDropDown = ({ items, placeholder = "Select an option", onSelect, size }: CustomDropDonwProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
    if (onSelect) onSelect(item.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef} style={{width: `${size*4}px`}}>
      <div 
        className={`${styles.dropdownHeader} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={styles.selectedValue}>
          {selectedItem ? selectedItem.label : placeholder}
        </p>
        <svg
          className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L6 6L11 1" stroke="var(--blue-color)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      
      {isOpen && (
        <div className={styles.dropdownList}>
          {items.map((item) => (
            <div
              key={item.value}
              className={`${styles.dropdownItem} ${
                selectedItem?.value === item.value ? styles.selected : ''
              }`}
              onClick={() => handleSelect(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;