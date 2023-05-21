import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('adds item to list', () => {
  render(<App />);

  // Simulate user typing a URL into the input field
  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'https://example.com' },
  });

  // Simulate user clicking the "Add" button
  fireEvent.click(screen.getByText('Add'));

  // Check that the URL was added to the list
  expect(screen.getByText('https://example.com')).toBeInTheDocument();
});
