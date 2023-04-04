import React, { FC } from "react";

import styles from "./styles.module.css";
import { ICharacterCard } from "../../interfaces/ICharacterCard";

type MyProps = {
  data: ICharacterCard;
};

const ItemProduct: FC<MyProps> = ({ data }) => {
  const { image, name, status, gender, species } = data;
  return (
    <li className={styles.item} data-testid="product-item">
      <img className={styles.img} src={image} alt={name} />
      <div className={styles.name}>{name}</div>
      <div className={styles.text}>{`Status: (${status})`}</div>
      <div className={styles.text}>{`Gender: (${gender})`}</div>
      <div className={styles.text}>{`Species: (${species})`}</div>
    </li>
  );
};

export { ItemProduct };
