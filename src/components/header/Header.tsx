import React from 'react';
import { SearchInput } from '../searchInput/SearchInput';
import { SearchButton } from '../searchButton/SearchButton';
import { Nav } from '../nav/Nav';
import { Routes, Route, Link } from 'react-router-dom';

import styles from './styles.module.css';
import { Ipath } from '../../interfaces/path';

interface PathProps {
  paths: Ipath[];
}

function Header(props: PathProps) {
  return (
    <div className={styles.header}>
      <div className="container">
        <Nav paths={props.paths} />
        <div className={styles.searchBlock}>
          <SearchInput message="search" />
          <SearchButton />
        </div>
      </div>
    </div>
  );
}

export { Header };
