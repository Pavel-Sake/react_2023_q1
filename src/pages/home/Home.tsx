import React from "react";
import { ItemProduct } from "../../components/ItemProduct/ItemProduct";
import styles from "./styles.module.css";
import { ICharacterCard } from "../../interfaces/ICharacterCard";
import { Loader } from "../../components/loader/Loader";
import { useAppSelector } from "../../hooks/redux";
import { rickAndMortyApi } from "../../services/rickAndMortyApi";

function Home() {
  const { text } = useAppSelector((state) => state.searchTextReducer);

  const { data, error, isLoading } = rickAndMortyApi.useGetPokemonByNameQuery(
    `${text}`
  );

  return (
    <div className={styles.homePage} data-testid="home-page">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <ul className={styles.productList} data-testid="product-list">
          {data.results.map((item: ICharacterCard) => {
            return <ItemProduct key={item.id} data={item} />;
          })}
        </ul>
      ) : null}
    </div>
  );
}

export { Home };
