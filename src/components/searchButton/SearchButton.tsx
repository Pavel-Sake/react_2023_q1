import React from "react";
import styles from "./steles.module.css";

type MyProps = {
  handleSendRequest: () => void;
};

function SearchButton({ handleSendRequest }: MyProps) {
  return (
    <div>
      <button className={styles.searchButton} onClick={handleSendRequest}>
        search
      </button>
    </div>
  );
}

export { SearchButton };
