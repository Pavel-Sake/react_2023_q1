import React, { useState } from "react";
import { SearchInput } from "../searchInput/SearchInput";
import { SearchButton } from "../searchButton/SearchButton";

import styles from "./styles.module.css";
import { RickandmortyapiService } from "../../services/rickandmortyapi-service";
import { log } from "util";

function SearchBlock() {
  const [textInput, setTextInput] = useState("");

  function handleInputSearch(text: string): void {
    setTextInput(text);
  }

  async function handleSendRequest() {
    const people = new RickandmortyapiService().getPeopleByName(textInput);

    people
      .then((data) => {
        console.log(data.results);
      })
      .catch((error) => {
        console.log("error--", error);
      });
  }

  return (
    <div className={styles.searchBlock}>
      <SearchInput
        placeholder="search"
        textInput={textInput}
        handleInputSearch={handleInputSearch}
      />
      <SearchButton handleSendRequest={handleSendRequest} />
    </div>
  );
}

export { SearchBlock };
