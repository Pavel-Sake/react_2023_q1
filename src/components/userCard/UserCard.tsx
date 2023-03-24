import React from "react";
import styles from "./styles.module.css";

class UserCard extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.card}>
        <img className={styles.img} src="/img/DaisyJones.jpg" />
        <div className={styles.text}>Pavel</div>
        <div className={styles.text}>Sakovich</div>
        <div className={styles.text}>21.10.1991</div>
        <div className={styles.text}>Belarus</div>
        <div className={styles.text}>male</div>
      </div>
    );
  }
}

export { UserCard };
