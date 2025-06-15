import { ChangeEvent, FC, useState, useId, useEffect } from "react";
import styles from "./styles.module.css";

interface ICustomInput {
  label?: string;
  state: string;
  setState: (value: string) => void;
  size?: number; // базовый размер в px (по умолчанию 40px)
  placeholder?: string;
  w?: number; // ширина в px
  type?: "email" | "text" | "password";
  disabled?: boolean;
}

const CustomInput: FC<ICustomInput> = ({
  label,
  state,
  setState,
  size = 40,
  w,
  type = "text",
  placeholder,
  disabled = false,
  ...props
}) => {
  const id = useId();
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(state);

  useEffect(() => {
    setInputValue(state);
  }, [state]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setState(e.target.value);
  };

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div
        className={`${styles.inputWrapper} ${isFocused ? styles.focused : ""} ${
          disabled ? styles.disabled : ""
        }`}
        style={{
          height: `${size}px`,
          width: w ? `${w}px` : "100%"
        }}
      >
        <input
          id={id}
          className={styles.input}
          type={type}
          value={inputValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            fontSize: `${size/2.5}px`,
          }}
          {...props}
        />
      </div>
    </div>
  );
};

export default CustomInput;