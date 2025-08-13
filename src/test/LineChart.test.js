import React from 'react';
import { render, screen } from '@testing-library/react';
import LineChart from '../components/LineChart';

// Mock Chart.js and react-chartjs-2
jest.mock('react-chartjs-2', () => ({
  Line: ({ data, options }) => (
    <div data-testid="line-chart">
      <div data-testid="chart-data">{JSON.stringify(data)}</div>
      <div data-testid="chart-options">{JSON.stringify(options)}</div>
    </div>
  ),
}));

describe('LineChart Component', () => {
  it('renders without crashing', () => {
    render(<LineChart />);
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
  });

  it('displays correct chart data structure', () => {
    render(<LineChart />);
    const chartData = JSON.parse(screen.getByTestId('chart-data').textContent);
    
    expect(chartData).toHaveProperty('labels');
    expect(chartData).toHaveProperty('datasets');
    expect(Array.isArray(chartData.labels)).toBe(true);
    expect(Array.isArray(chartData.datasets)).toBe(true);
  });

  it('has correct labels for days of the week', () => {
    render(<LineChart />);
    const chartData = JSON.parse(screen.getByTestId('chart-data').textContent);
    
    expect(chartData.labels).toEqual([
      "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"
    ]);
  });

  it('has correct dataset configuration', () => {
    render(<LineChart />);
    const chartData = JSON.parse(screen.getByTestId('chart-data').textContent);
    
    expect(chartData.datasets[0]).toHaveProperty('label', 'Utilisateurs actifs');
    expect(chartData.datasets[0]).toHaveProperty('data');
    expect(chartData.datasets[0]).toHaveProperty('borderColor', 'rgb(75, 192, 192)');
    expect(chartData.datasets[0]).toHaveProperty('backgroundColor', 'rgba(75, 192, 192, 0.5)');
  });

  it('has correct chart options', () => {
    render(<LineChart />);
    const chartOptions = JSON.parse(screen.getByTestId('chart-options').textContent);
    
    expect(chartOptions).toHaveProperty('responsive', true);
    expect(chartOptions).toHaveProperty('plugins');
    expect(chartOptions.plugins).toHaveProperty('legend');
    expect(chartOptions.plugins).toHaveProperty('title');
    expect(chartOptions.plugins.title).toHaveProperty('text', 'Statistiques hebdomadaires');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<LineChart />);
    expect(asFragment()).toMatchSnapshot();
  });
});
