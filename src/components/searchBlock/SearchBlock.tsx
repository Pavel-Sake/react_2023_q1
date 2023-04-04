import React, { useState } from "react";
import { SearchInput } from "../searchInput/SearchInput";
import { SearchButton } from "../searchButton/SearchButton";
import { ICharacterCard } from "../../interfaces/ICharacterCard";

import styles from "./styles.module.css";
import { RickandmortyapiService } from "../../services/rickandmortyapi-service";

type MyProps = {
  handleSetCharactersCard: (cardsCharacter: ICharacterCard[]) => void;
};



function SearchBlock({ handleSetCharactersCard }: MyProps) {
  const [textInput, setTextInput] = useState("");

  function handleInputSearch(text: string): void {
    setTextInput(text);
  }

  function handleSendRequest() {
    const people = new RickandmortyapiService().getPeopleByName(textInput);

    people
      .then((data) => {
        handleSetCharactersCard(data.results)
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
