import React from "react";
import styles from "./styles.module.css";

type MyProps = {
  placeholder: string;
  textInput: string;
  handleInputSearch: (text: string) => void;
};

function SearchInput({ placeholder, textInput, handleInputSearch }: MyProps) {
  function handleChangeInput(e: React.FormEvent<HTMLInputElement>): void {
    handleInputSearch(e.currentTarget.value);
  }

  return (
    <input
      className={styles.input}
      data-testid="searchInput"
      type="text"
      placeholder={placeholder}
      value={textInput}
      onChange={handleChangeInput}
    />
  );
}

export { SearchInput };
