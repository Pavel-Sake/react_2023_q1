import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

type MyProps = {
  message: string;
};
function SearchInput({ message }: MyProps) {
  const [text, setText] = useState({
    text: "",
  });

  function handleChangeInput(e: React.FormEvent<HTMLInputElement>): void {
    localStorage.setItem("inputValue", e.currentTarget.value);
    setText({ text: e.currentTarget.value });
  }

  useEffect(() => {
    const inputValue = localStorage.getItem("inputValue");
    if (inputValue) {
      setText({ text: inputValue });
    }
  }, []);

  return (
    <input
      className={styles.input}
      data-testid="searchInput"
      type="text"
      placeholder={message}
      value={text.text}
      onChange={handleChangeInput}
    />
  );
}

export { SearchInput };
