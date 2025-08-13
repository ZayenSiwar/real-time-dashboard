module.exports = {
  icon: jest.fn(() => ({
    iconUrl: 'test-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  })),
  map: jest.fn(),
  tileLayer: jest.fn(),
  marker: jest.fn(),
  popup: jest.fn(),
  circleMarker: jest.fn(),
};
