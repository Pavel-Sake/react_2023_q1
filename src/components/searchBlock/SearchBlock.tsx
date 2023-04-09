import React, { useEffect, useState } from "react";
import { SearchInput } from "../searchInput/SearchInput";
import { SearchButton } from "../searchButton/SearchButton";

import styles from "./styles.module.css";

type MyProps = {
  handleSetSearchName: (text: string) => void;
};

function SearchBlock({ handleSetSearchName }: MyProps) {
  const [textInput, setTextInput] = useState("");

  function handleInputSearch(text: string): void {
    setTextInput(text);
    localStorage.setItem("inputValue", text);
  }

  function handleSubmitTextInput() {
    handleSetSearchName(textInput);
  }

  useEffect(() => {
    const inputValue: string | null = localStorage.getItem("inputValue");
    if (inputValue) {
      setTextInput(inputValue);
      handleSetSearchName(inputValue);
    }
  }, [handleSetSearchName]);

  return (
    <div className={styles.searchBlock} data-testid="searchBlock">
      <SearchInput
        placeholder="search"
        textInput={textInput}
        handleInputSearch={handleInputSearch}
      />
      <SearchButton handleSubmitTextInput={handleSubmitTextInput} />
    </div>
  );
}

export { SearchBlock };
