import React, { useEffect, useRef, useState } from "react";
import { SearchInput } from "../searchInput/SearchInput";
import { SearchButton } from "../searchButton/SearchButton";

import styles from "./styles.module.css";
import { searchTextSlice } from "../../store/reducers/SearchTextSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";



function SearchBlock( ) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { text } = useAppSelector((state) => state.searchTextReducer);
  const dispatch = useAppDispatch();
  const { searchCard } = searchTextSlice.actions;

  function handleSubmitTextInput() {
    if (inputRef.current) {
      dispatch(searchCard(inputRef.current.value))
    }
  }

  useEffect(() => {
    // const inputValue: string | null = localStorage.getItem("inputValue");
    // if (inputValue) {
    //   setTextInput(inputValue);
    //   handleSetSearchName(inputValue);
    // }
  }, []);

  return (
    <div className={styles.searchBlock} data-testid="searchBlock">
      <div>{text}</div>
      <SearchInput placeholder="search" inputRef={inputRef} />
      <SearchButton handleSubmitTextInput={handleSubmitTextInput} />
    </div>
  );
}

export { SearchBlock };
