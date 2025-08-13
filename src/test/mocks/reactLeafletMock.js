module.exports = {
  MapContainer: ({ children }) => <div>{children}</div>,
  TileLayer: () => <div data-testid="tile-layer" />,
  Marker: ({ children }) => <div data-testid="marker">{children}</div>,
  Popup: ({ children }) => <div data-testid="popup">{children}</div>,
  CircleMarker: ({ children }) => <div data-testid="circle-marker">{children}</div>,
  useMap: jest.fn(),
};
