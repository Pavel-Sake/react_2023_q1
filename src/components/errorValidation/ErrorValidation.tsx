import React from "react";
import styles from "./styles.module.css";

type MyProps = {
  text: string | undefined;
  isValid: boolean | null | undefined;
};
class ErrorValidation extends React.Component<MyProps> {
  render() {
    const { text, isValid } = this.props;
    return (
      <>
        {!isValid ? (
          <div className={styles.textError}>{text}</div>
        ) : (
          <div className={styles.space}></div>
        )}
      </>
    );
  }
}

export { ErrorValidation };
