// src/test/MapComponent.test.js
import { render, screen } from '@testing-library/react';
import MapComponent from '../components/MapComponent';

describe('MapComponent', () => {
  it('renders map container', () => {
    render(<MapComponent />);
    const mapElement = screen.getByTestId('map-container');
    expect(mapElement).toBeInTheDocument();
  });

  it('displays map with correct dimensions', () => {
    render(<MapComponent />);
    const mapElement = screen.getByTestId('map-container');
    
   
  });
});