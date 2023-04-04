import React from "react";
import { ItemProduct } from "../../components/ItemProduct/ItemProduct";
import styles from "./styles.module.css";
import { useOutletContext } from "react-router-dom";
import { ICharacterCard } from "../../interfaces/ICharacterCard";

function Home() {
  const charactersCard = useOutletContext<ICharacterCard[]>();

  return (
    <div data-testid="home-page">
      <ul className={styles.productList} data-testid="product-list">
        {charactersCard.map((item) => {
          return <ItemProduct key={item.id} data={item} />;
        })}
      </ul>
    </div>
  );
}

export { Home };
