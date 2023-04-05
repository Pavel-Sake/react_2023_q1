import React, { useEffect, useState } from "react";
import { ItemProduct } from "../../components/ItemProduct/ItemProduct";
import styles from "./styles.module.css";
import { useOutletContext } from "react-router-dom";
import { ICharacterCard } from "../../interfaces/ICharacterCard";
import { RickandmortyapiService } from "../../services/rickandmortyapi-service";
import { Loader } from "../../components/loader/Loader";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [charactersCard, setCharactersCard] = useState<ICharacterCard[]>([]);

  const searchName = useOutletContext<string>();

  useEffect(() => {
    setIsLoading(true);

    const people = new RickandmortyapiService().getPeopleByName(searchName);
    people
      .then((data) => {
        setCharactersCard(data.results);
        setIsLoading(false);
      })
      .catch(() => {});
  }, [searchName]);

  return (
    <div className={styles.homePage} data-testid="home-page" >
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.productList} data-testid="product-list">
          {charactersCard.map((item) => {
            return <ItemProduct key={item.id} data={item} />;
          })}
        </ul>
      )}
    </div>
  );
}

export { Home };
