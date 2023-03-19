import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Ipath } from '../../interfaces/path';

import styles from './styles.module.css';

interface PathProps {
  path: Ipath;
  changePageLabel: (text: string) => void;
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
          data-testid="link"
          to={path}
          onClick={() => {
            this.props.changePageLabel(path);
          }}
        >
          {value}
        </NavLink>
      </li>
    );
  }
}

export { ItemLink };
