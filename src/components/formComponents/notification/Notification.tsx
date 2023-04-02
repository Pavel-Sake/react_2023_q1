import React from "react";
import styles from "./styles.module.css";

function Notification() {
  return (
    <div className={styles.overlay} data-testid="notification">
      <div className={styles.notification}>card has been created</div>
    </div>
  );
}

export { Notification };
