import React from "react";
import styles from "./styles.module.css";

function NotFound() {
  return (
    <div className={styles.notFound} data-testid="not-found-page">
      <h3 className={styles.text}>Page has not found (404)</h3>
    </div>
  );
}

export { NotFound };
