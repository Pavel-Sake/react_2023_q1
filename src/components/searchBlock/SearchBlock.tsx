import React, { useRef } from "react";
import { SearchInput } from "../searchInput/SearchInput";
import { SearchButton } from "../searchButton/SearchButton";

import styles from "./styles.module.css";
import { searchTextSlice } from "../../store/reducers/SearchTextSlice";
import { useAppDispatch } from "../../hooks/redux";

function SearchBlock() {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const { searchCard } = searchTextSlice.actions;

  function handleSubmitTextInput() {
    if (inputRef.current) {
      dispatch(searchCard(inputRef.current.value));
    }
  }

  return (
    <div className={styles.searchBlock} data-testid="searchBlock">
      <SearchInput placeholder="search" inputRef={inputRef} />
      <SearchButton handleSubmitTextInput={handleSubmitTextInput} />
    </div>
  );
}

export { SearchBlock };
