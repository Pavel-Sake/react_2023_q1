import React from 'react';
import { render, screen } from '@testing-library/react';

import { Home } from '../pages/home/Home';
import { products } from '../data/products';

describe('Test Homepage', () => {
  test('is lest render', () => {
    render(<Home products={products} />);

    const list = screen.getByTestId('product-list');
    expect(list).toBeInTheDocument();
  });
  test('number of elements in page', () => {
    render(<Home products={products} />);
    const productsLength = products.length;

    const items = screen.getAllByTestId('product-item');

    expect(items.length).toBe(productsLength);
  });
});
