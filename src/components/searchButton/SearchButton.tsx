import React from "react";
import styles from "./steles.module.css";

type MyProps = {
  handleSubmitTextInput: () => void;
};

function SearchButton({ handleSubmitTextInput }: MyProps) {
  return (
    <div>
      <button className={styles.searchButton} onClick={handleSubmitTextInput}>
        search
      </button>
    </div>
  );
}

export { SearchButton };
