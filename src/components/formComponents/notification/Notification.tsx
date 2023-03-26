import React from "react";
import styles from "./styles.module.css"

type MyProps = {
  message?: ""
}
class Notification extends React.Component<MyProps> {

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.notification}>card has been created</div>
      </div>
    );
  }
}


export {Notification}