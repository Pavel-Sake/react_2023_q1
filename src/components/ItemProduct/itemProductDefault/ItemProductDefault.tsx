import React, { FC } from "react";
import { ICharacterCard } from "../../../interfaces/ICharacterCard";
import styles from "./styles.module.css";

type MyProps = {
  data: ICharacterCard;
  changeCardState: () => void;
};

const ItemProductDefault: FC<MyProps> = ({ data, changeCardState }) => {
  const { image, name, gender } = data;
  return (
    <div className={styles.item} onClick={changeCardState}>
      <img className={styles.img} src={image} alt={name} />
      <div className={styles.name}>{name}</div>
      <div className={styles.text}>{`Gender: (${gender})`}</div>
    </div>
  );
};

export { ItemProductDefault };
