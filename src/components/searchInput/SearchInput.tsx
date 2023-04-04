import React, { useEffect } from "react";
import styles from "./styles.module.css";

type MyProps = {
  placeholder: string;
  textInput: string;
  handleInputSearch: (text: string) => void;
};

function SearchInput({ placeholder, textInput, handleInputSearch }: MyProps) {
  function handleChangeInput(e: React.FormEvent<HTMLInputElement>): void {
    // localStorage.setItem("inputValue", e.currentTarget.value);
    handleInputSearch(e.currentTarget.value);
  }

  useEffect(() => {
    // const inputValue = localStorage.getItem("inputValue");
    // if (inputValue) {
    //   setText({ text: inputValue });
    // }
  }, []);

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
