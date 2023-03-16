import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ItemLink } from '../itemLink/ItemLink';

import styles from './styles.module.css';
import { Ipath } from '../../interfaces/path';

interface PathProps {
  paths: Ipath[];
  changePathLabel: (text: string) => void;

}

type MyState = {
  state: string;
};
class Nav extends React.Component<PathProps, MyState> {
  render() {
    const { paths } = this.props;
    return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {paths.map((path) => {
            return (
              <ItemLink path={path} key={path.index} changePathLabel={this.props.changePathLabel} />
            );
          })}
        </ul>
      </nav>
    );
  }
}

export { Nav };
