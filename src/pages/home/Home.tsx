import React from 'react';
import { ItemProduct } from '../../components/ItemProduct/ItemProduct';
import { Iproducts } from '../../interfaces/products';
import styles from './styles.module.css';

interface MyProps {
  products: Iproducts[];
}

type MyState = {
  count: number;
};

class Home extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div data-testid="home-page">
        <ul className={styles.productList} data-testid="product-list">
          {this.props.products.map((item) => {
            return <ItemProduct key={item.id} product={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export { Home };
