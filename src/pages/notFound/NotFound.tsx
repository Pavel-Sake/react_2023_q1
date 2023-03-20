import React from "react";
import styles from "./styles.module.css";

type MyProps = {
  message: string;
};

type MyState = {
  state: number;
};
class NotFound extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div className={styles.notFound} data-testid="not-found-page">
        <h3 className={styles.text}>Page has not found (404)</h3>
      </div>
    );
  }
}

export { NotFound };
