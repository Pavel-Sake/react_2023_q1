import { render, screen, fireEvent } from '@testing-library/react';

import { SearchInput } from '../components/searchInput/SearchInput';

describe('Test App', () => {
  test('input test', () => {
    const message = 'search';
    render(<SearchInput message={message} />);
    const input = screen.getByTestId('searchInput');

    expect(input).toBeTruthy();
    expect(input).toHaveAttribute('placeholder', message);

    // fireEvent.change(input, { target: { value: '$23.0' } });
    // expect(input).toHaveValue('$23.0');
  });

  test('input event test', () => {
    const message = 'search';
    render(<SearchInput message={message} />);
    const input = screen.getByTestId('searchInput');

    fireEvent.change(input, { target: { value: '$23.0' } });
    expect(input).toHaveValue('$23.0');
  });
});
