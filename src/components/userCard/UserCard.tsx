import React from "react";
import styles from "./styles.module.css";
//import { IDataFromForm } from "../../interfaces/IStateForForm";

import avatarImg from "../../assets/icons/user.png";

import { IUserFormState } from "../../interfaces/IUserFormState";

type MyProps = {
  card: IUserFormState;
};

interface IImg {
  [key: number]: object;
}

function UserCard({ card }: MyProps) {
  const { name, surname, birthday, country, gender, imgFile } = card;
  const img: IImg = { ...imgFile };

  return (
    <div className={styles.card}>
      {img[0] ? (
        <img
          className={styles.img}
          src={URL.createObjectURL(img[0] as Blob)}
          alt="avatar"
        />
      ) : (
        <img className={styles.img} src={avatarImg} alt="avatar" />
      )}
      <div className={styles.text}>{name}</div>
      <div className={styles.text}>{surname}</div>
      <div className={styles.text}>{birthday}</div>
      <div className={styles.text}>{country}</div>
      <div className={styles.text}>{gender}</div>
    </div>
  );
}

export { UserCard };
