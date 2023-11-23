import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pokemon Api link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokemon Api/i);
  expect(linkElement).toBeInTheDocument();
});
