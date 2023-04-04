import React, { useState } from "react";
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
  }

  function handleSubmitTextInput() {
    handleSetSearchName(textInput);
  }

  return (
    <div className={styles.searchBlock}>
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
