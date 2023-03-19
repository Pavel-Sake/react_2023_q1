import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header, getPageLabel } from '../components/header/Header';
import { paths } from '../data/paths';
import { MemoryRouter } from 'react-router-dom';

describe('Test Header page', () => {
  test('render', () => {
    render(
      <MemoryRouter>
        <Header paths={paths} />
      </MemoryRouter>
    );
    const navElement = screen.queryByTestId('nav');

    expect(navElement).toBeInTheDocument();
  });
  test('test getPageLabel', () => {
    expect(getPageLabel('/')).toBe('Home');
    expect(getPageLabel('/about')).toBe('About');
    expect(getPageLabel('/notFound')).toBe('Not found');
  });
});
