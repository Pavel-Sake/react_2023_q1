import React from "react";
import styles from "./styles.module.css";

type MyProps = {
  message: string;
};

type MyState = {
  count: number;
};

class About extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div data-testid="about-page">
        <h3 className={styles.h3}>Who We Are</h3>
        <div className={styles.text}>
          Goodreads is the world’s largest site for readers and book
          recommendations. Our mission is to help people find and share books
          they love. Goodreads launched in January 2007
        </div>
      </div>
    );
  }
}

export { About };
