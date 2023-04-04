import React, { FC } from "react";

import styles from "./styles.module.css";
import { ICharacterCard } from "../../interfaces/ICharacterCard";

type MyProps = {
  data: ICharacterCard;
};

const ItemProduct: FC<MyProps> = ({ data }) => {
  console.log(data);
  const { image, name, status, gender, species } = data;
  return (
    <li className={styles.item} data-testid="product-item">
      <img className={styles.img} src={image} alt={name} />
      <div>{name}</div>
      <div>{`Status: (${status})`}</div>
      <div>{`Gender: (${gender})`}</div>
      <div>{`Species: (${species})`}</div>
    </li>
  );
};

export { ItemProduct };
