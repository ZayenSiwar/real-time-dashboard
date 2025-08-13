import React from 'react';
import { render, screen } from '@testing-library/react';
import BarChart from '../components/BarChart';

// Mock Chart.js and react-chartjs-2
jest.mock('react-chartjs-2', () => ({
  Bar: ({ data, options }) => (
    <div data-testid="bar-chart">
      <div data-testid="chart-data">{JSON.stringify(data)}</div>
      <div data-testid="chart-options">{JSON.stringify(options)}</div>
    </div>
  ),
}));

describe('BarChart Component', () => {
  it('renders without crashing', () => {
    render(<BarChart />);
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
  });

  it('displays correct chart data structure', () => {
    render(<BarChart />);
    const chartData = JSON.parse(screen.getByTestId('chart-data').textContent);
    
    expect(chartData).toHaveProperty('labels');
    expect(chartData).toHaveProperty('datasets');
    expect(Array.isArray(chartData.labels)).toBe(true);
    expect(Array.isArray(chartData.datasets)).toBe(true);
  });

  it('has correct month labels in French', () => {
    render(<BarChart />);
    const chartData = JSON.parse(screen.getByTestId('chart-data').textContent);
    
    expect(chartData.labels).toEqual([
      "Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil"
    ]);
  });

  it('has correct dataset configuration', () => {
    render(<BarChart />);
    const chartData = JSON.parse(screen.getByTestId('chart-data').textContent);
    
    expect(chartData.datasets[0]).toHaveProperty('label', 'Ventes');
    expect(chartData.datasets[0]).toHaveProperty('data');
    expect(chartData.datasets[0]).toHaveProperty('backgroundColor', 'rgba(255, 206, 86, 0.7)');
  });

  it('has correct chart options', () => {
    render(<BarChart />);
    const chartOptions = JSON.parse(screen.getByTestId('chart-options').textContent);
    
    expect(chartOptions).toHaveProperty('responsive', true);
    expect(chartOptions).toHaveProperty('plugins');
    expect(chartOptions.plugins).toHaveProperty('legend');
    expect(chartOptions.plugins).toHaveProperty('title');
    expect(chartOptions.plugins.title).toHaveProperty('text', 'Ventes mensuelles');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<BarChart />);
    expect(asFragment()).toMatchSnapshot();
  });
});
