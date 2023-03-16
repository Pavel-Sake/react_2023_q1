import React from 'react';
import { SearchInput } from '../searchInput/SearchInput';
import { SearchButton } from '../searchButton/SearchButton';
import { Nav } from '../nav/Nav';
import { Routes, Route, Link } from 'react-router-dom';

import styles from './styles.module.css';
import { Ipath } from '../../interfaces/path';
import {paths} from "../../data/paths";

interface PathProps {
  paths: Ipath[];
  changePathLabel: (text: string) => void;
  pathLabel: string;
}

type MyState = {
  path: string;
};

class Header extends React.Component<PathProps, MyState> {
  render() {
    return (
      <div className={styles.header}>
        <div className="container">
          <Nav paths={this.props.paths} changePathLabel={this.props.changePathLabel} />
          <div className={styles.searchBlock}>
            <div>{this.props.pathLabel}</div>
            <SearchInput message="search" />
            <SearchButton number={34} />
          </div>
        </div>
      </div>
    );
  }
}

export { Header };
