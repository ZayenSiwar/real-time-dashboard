// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Real-Time Ops Dashboard/i);
  expect(titleElement).toBeInTheDocument();
});