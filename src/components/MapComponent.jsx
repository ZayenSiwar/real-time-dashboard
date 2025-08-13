// src/components/MapComponent.jsx

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Assurez-vous que ce fichier est correctement importé

export default function MapComponent() {
  return (
    <div className="h-96 rounded-xl overflow-hidden shadow" data-testid="map-container">
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[48.8566, 2.3522]}>
          <Popup>Paris Data Center</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}