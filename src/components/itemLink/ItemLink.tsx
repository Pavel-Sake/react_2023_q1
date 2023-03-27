import React from "react";
import { NavLink } from "react-router-dom";
import { Ipath } from "../../interfaces/path";

import styles from "./styles.module.css";

interface PathProps {
  path: Ipath;
  changePageLabel: (text: string) => void;
}

function ItemLink({ path, changePageLabel }: PathProps) {
  return (
    <li className={styles.itemLink}>
      <NavLink
        className={styles.link}
        data-testid="link"
        to={path.path}
        onClick={() => {
          changePageLabel(path.path);
        }}
      >
        {path.value}
      </NavLink>
    </li>
  );
}

export { ItemLink };
