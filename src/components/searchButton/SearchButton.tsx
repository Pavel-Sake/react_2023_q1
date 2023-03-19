import React from 'react';
import styles from './steles.module.css';

type MyProps = {
  number: number;
};

type MyState = {
  state: string;
};
class SearchButton extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div>
        <button className={styles.searchButton}>search</button>
      </div>
    );
  }
}

export { SearchButton };
