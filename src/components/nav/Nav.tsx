import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ItemLink } from '../itemLink/ItemLink';

import styles from './styles.module.css';
import { Ipath } from '../../interfaces/path';

interface PathProps {
  paths: Ipath[];
}

class Nav extends React.Component<PathProps, any> {
  render() {
    return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {this.props.paths.map((path) => {
            return <ItemLink path={path} key={path.index} />;
          })}
        </ul>
      </nav>
    );
  }
}

export { Nav };
