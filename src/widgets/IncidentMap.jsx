import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const initialIncidents = [
  { id: 1, lat: 35.4676, lng: -97.5164, title: "Severe weather - Oklahoma", severity: "warning" },
  { id: 2, lat: 51.5074, lng: -0.1278, title: "Network outage - London", severity: "incident" },
  { id: 3, lat: -33.8688, lng: 151.2093, title: "Service degradation - Sydney", severity: "ok" },
];

export default function IncidentMap() {
  const [incidents, setIncidents] = useState(initialIncidents);

  useEffect(() => {
    const t = setInterval(() => {
      // randomly add/remove or change an incident to simulate live
      setIncidents(prev => {
        const next = [...prev];
        if (Math.random() > 0.7) {
          // add new
          next.push({
            id: Date.now(),
            lat: -40 + Math.random() * 80,
            lng: -180 + Math.random() * 360,
            title: "Auto event",
            severity: Math.random() > 0.7 ? "incident" : "warning",
          });
        } else if (next.length > 3 && Math.random() > 0.8) {
          next.splice(Math.floor(Math.random() * next.length), 1);
        }
        return next.slice(-8);
      });
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const color = s => (s === "incident" ? "#ef4444" : s === "warning" ? "#f59e0b" : "#10b981");

  return (
    <div>
      <h3 className="text-lg font-medium mb-3">Incidents Map</h3>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: 350, borderRadius: 8 }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {incidents.map(i => (
          <CircleMarker
            key={i.id}
            center={[i.lat, i.lng]}
            radius={10}
            pathOptions={{ color: color(i.severity), fillOpacity: 0.7 }}
          >
            <Popup>
              <div>
                <div className="font-semibold">{i.title}</div>
                <div className="text-xs text-gray-500">Severity: {i.severity}</div>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
