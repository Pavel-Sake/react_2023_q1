import React from 'react';
import { ItemLink } from '../itemLink/ItemLink';

import styles from './styles.module.css';
import { Ipath } from '../../interfaces/path';

interface PathProps {
  paths: Ipath[];
  changePageLabel: (text: string) => void;
}

type MyState = {
  state: string;
};
class Nav extends React.Component<PathProps, MyState> {
  render() {
    const { paths } = this.props;
    return (
      <nav className={styles.nav} data-testid="nav">
        <ul className={styles.navList}>
          {paths.map((path) => {
            return (
              <ItemLink path={path} key={path.index} changePageLabel={this.props.changePageLabel} />
            );
          })}
        </ul>
      </nav>
    );
  }
}

export { Nav };
