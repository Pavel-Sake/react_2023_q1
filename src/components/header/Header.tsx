import React from 'react';
import { SearchInput } from '../searchInput/SearchInput';
import { SearchButton } from '../searchButton/SearchButton';
import { Nav } from '../nav/Nav';

import styles from './styles.module.css';
import { Ipath } from '../../interfaces/path';

interface PathProps {
  paths: Ipath[];
}

type MyState = {
  path: string | undefined;
};
export function getPageLabel(text: string): string | undefined {
  let label = 'Not found';
  if (text === '/') {
    label = 'Home';
    return label;
  }

  if (text === '/about') {
    label = 'About';
    return label;
  }
  return label;
}

class Header extends React.Component<PathProps, MyState> {
  state: MyState = {
    path: 'Home',
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
