import React from "react";
import { ItemLink } from "../itemLink/ItemLink";

import styles from "./styles.module.css";
import { Ipath } from "../../interfaces/path";

interface PathProps {
  paths: Ipath[];
  changePageLabel: (text: string) => void;
}

function Nav({ paths, changePageLabel }: PathProps) {
  return (
    <nav className={styles.nav} data-testid="nav">
      <ul className={styles.navList}>
        {paths.map((path) => {
          return (
            <ItemLink
              path={path}
              key={path.index}
              changePageLabel={changePageLabel}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export { Nav };
