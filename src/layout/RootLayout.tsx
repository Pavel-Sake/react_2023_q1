import React, { useState } from "react";
import { Header } from "../components/header/Header";
import { Ipath } from "../interfaces/path";
import { Outlet } from "react-router-dom";
import { ICharacterCard } from "../interfaces/ICharacterCard";

import styles from "./styles.module.css";

interface PathProps {
  paths: Ipath[];
}



function RootLayout({ paths }: PathProps) {
  const [charactersCard, setCharactersCard] = useState<ICharacterCard[]>([]);

  function handleSetCharactersCard(cardsCharacter: ICharacterCard[]) {
    setCharactersCard(cardsCharacter);
  }

  return (
    <div className={styles.rootLayout}>
      <Header paths={paths} handleSetCharactersCard={handleSetCharactersCard} />
      <main className={styles.main}>
        <div className="container">
          <Outlet context={charactersCard} />
        </div>
      </main>
    </div>
  );
}

export { RootLayout };
