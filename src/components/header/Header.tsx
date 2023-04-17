import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Nav } from "../nav/Nav";

import styles from "./styles.module.css";
import { Ipath } from "../../interfaces/path";
import { SearchBlock } from "../searchBlock/SearchBlock";

interface PathProps {
  paths: Ipath[];
}

type PathLibrary = {
  [key: string]: string;
};

const pathLibrary: PathLibrary = {
  "/": "Home",
  "/about": "About",
  "/form": "Form",
};

export function getPageLabel(key: string): string {
  const label = pathLibrary[key];

  if (label) {
    return label;
  } else {
    return "Not found";
  }
}

function Header({ paths }: PathProps) {
  const [path, setPath] = useState({ path: "Home" });
  const location = useLocation();

  useEffect(() => {
    const label = getPageLabel(location.pathname);
    setPath({ path: label });
  }, [location.pathname]);
  const changePageLabel = (text: string): void => {
    const label = getPageLabel(text);
    setPath({ path: label });
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <Nav paths={paths} changePageLabel={changePageLabel} />
        <div className={styles.searchBlock}>
          <div data-testid="page-label">{path.path}</div>
          <SearchBlock />
        </div>
      </div>
    </div>
  );
}

export { Header };
