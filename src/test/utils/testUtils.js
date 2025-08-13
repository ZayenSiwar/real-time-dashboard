import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Custom render function with providers
export const renderWithProviders = (ui, options = {}) => {
  const { wrapper: Wrapper = BrowserRouter, ...renderOptions } = options;

  const AllProviders = ({ children }) => (
    <Wrapper>
      {children}
    </Wrapper>
  );

  return render(ui, { wrapper: AllProviders, ...renderOptions });
};

// Test data factories
export const createMockStats = (overrides = {}) => ({
  operational: 72,
  warning: 4,
  incident: 1,
  total: 77,
  ...overrides,
});

export const createMockChartData = (overrides = {}) => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'CPU Usage',
      data: [65, 59, 80, 81, 56, 55],
      ...overrides,
    },
  ],
});

// Async utilities
export const waitFor = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock service responses
export const mockWebSocketService = {
  connect: jest.fn(),
  disconnect: jest.fn(),
  send: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
};
