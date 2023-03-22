import React from "react";
import { SearchInput } from "../searchInput/SearchInput";
import { SearchButton } from "../searchButton/SearchButton";
import { Nav } from "../nav/Nav";

import styles from "./styles.module.css";
import { Ipath } from "../../interfaces/path";

interface PathProps {
  paths: Ipath[];
}

type MyState = {
  path: string | undefined;
};

const pathLibrary = {
  "/": "Home",
  "/about": "About",
  "/form": "Form",
};
export function getPageLabel(text: string): string | undefined {
  const label = pathLibrary[text as keyof typeof pathLibrary];

  if (label) {
    return label;
  } else {
    return "Not found";
  }
}

class Header extends React.Component<PathProps, MyState> {
  state: MyState = {
    path: "Home",
  };
  componentDidMount() {
    const url = window.location.pathname;
    const label = getPageLabel(url);
    this.setState({ path: label });
  }

  render() {
    const changePageLabel = (text: string): void => {
      const label = getPageLabel(text);
      this.setState({ path: label });
    };

    return (
      <div className={styles.header}>
        <div className="container">
          <Nav paths={this.props.paths} changePageLabel={changePageLabel} />
          <div className={styles.searchBlock}>
            <div data-testid="page-label">{this.state.path}</div>
            <SearchInput message="search" />
            <SearchButton number={34} />
          </div>
        </div>
      </div>
    );
  }
}

export { Header };
