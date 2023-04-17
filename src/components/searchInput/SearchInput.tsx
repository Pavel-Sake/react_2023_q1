import React from "react";
import styles from "./styles.module.css";

type MyProps = {
  placeholder: string;
  inputRef: React.RefObject<HTMLInputElement>;
};

function SearchInput({ placeholder, inputRef }: MyProps) {
  return (
    <input
      className={styles.input}
      ref={inputRef}
      data-testid="searchInput"
      type="text"
      placeholder={placeholder}
    />
  );
}

export { SearchInput };
