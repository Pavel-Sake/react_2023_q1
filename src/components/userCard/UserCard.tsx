import React from "react";
import styles from "./styles.module.css";
import { IDataFromForm } from "../../interfaces/IStateForForm";

import avatarImg from "../../assets/icons/user.png";

type MyProps = {
  card: IDataFromForm;
};

class UserCard extends React.Component<MyProps> {
  render() {
    const { name, surname, birthday, country, gender, file } = this.props.card;

    return (
      <div className={styles.card}>
        {file ? (
          <img
            className={styles.img}
            src={URL.createObjectURL(file as Blob)}
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
}

export { UserCard };
