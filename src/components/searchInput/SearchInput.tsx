import React from 'react';
import styles from './styles.module.css';

type MyProps = {
  message: string;
};

type MyState = {
  text: string;
};

class SearchInput extends React.Component<MyProps, MyState> {
  state: MyState = {
    text: '',
  };

  handleChangeInput = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <input
          className={styles.input}
          data-testid="searchInput"
          type="text"
          placeholder={this.props.message}
          value={this.state.text}
          onChange={this.handleChangeInput}
        />
      </>
    );
  }
}

export { SearchInput };
