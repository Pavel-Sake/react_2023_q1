import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Ipath } from '../../interfaces/path';

import styles from './styles.module.css';

interface PathProps {
  path: Ipath;
  changePathLabel: (text: string) => void;
}

type MyState = {
  state: string;
};
class ItemLink extends React.Component<PathProps, MyState> {
  render() {
    const { value, path } = this.props.path;

    return (
      <li className={styles.itemLink}>
        <NavLink
          className={styles.link}
          to={path}
          onClick={() => {
            this.props.changePathLabel(path);
          }}
        >
          {value}
        </NavLink>
      </li>
    );
  }
}

export { ItemLink };
