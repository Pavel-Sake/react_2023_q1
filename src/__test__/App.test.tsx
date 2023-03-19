import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
test('Router test', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const homePage = screen.getByTestId('home-page');
  const aboutPage = screen.findByTestId('about-page');
  const links = screen.getAllByTestId('link');

  userEvent.click(links[0]);
  expect(homePage).toBeInTheDocument();

  userEvent.click(links[0]);
  expect(homePage).toBeInTheDocument();
});
