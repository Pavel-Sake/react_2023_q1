import React from 'react';
import { Header } from '../../components/header/Header';

type MyProps = {
  message: string;
};

type MyState = {
  count: number;
};

class Home extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div>
        <h1>kjsdfhbksdhfbksjdhfbkvjsdhfbvkjsdhbfvjs</h1>
      </div>
    );
  }
}

export { Home };
