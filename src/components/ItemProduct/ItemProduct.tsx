import React from 'react';
import { Iproducts } from '../../interfaces/products';

import styles from './styles.module.css';

interface MyProps {
  product: Iproducts;
}

type MyState = {
  state: string;
};
class ItemProduct extends React.Component<MyProps, MyState> {
  render() {
    const { name, author, rating, price, currency, src } = this.props.product;
    return (
      <li className={styles.item} data-testid="product-item">
        <img className={styles.img} src={src} />
        <div>{name}</div>
        <div>{author}</div>
        <div>{rating}</div>
        <div>{`${price} ${currency}`}</div>
      </li>
    );
  }
}

export { ItemProduct };
