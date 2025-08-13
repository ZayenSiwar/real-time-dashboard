import React, { useEffect, useState } from "react";

function ServerStatus({ label, count, color }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <div className="text-sm text-gray-400">{label}</div>
      <div className={`text-2xl font-bold ${color}`}>{count}</div>
    </div>
  );
}

export default function StatsPanel() {
  const [servers, setServers] = useState({ ok: 72, warning: 4, incident: 1 });

  // simulate minor fluctuation
  useEffect(() => {
    const t = setInterval(() => {
      setServers(prev => {
        const change = Math.random() > 0.7 ? 1 : 0;
        return {
          ok: Math.max(60, prev.ok + (Math.random() > 0.6 ? 1 : 0) - change),
          warning: Math.max(0, prev.warning + (Math.random() > 0.8 ? 1 : 0) - (Math.random() > 0.85 ? 1 : 0)),
          incident: Math.max(0, prev.incident + (Math.random() > 0.95 ? 1 : 0) - (Math.random() > 0.95 ? 1 : 0))
        };
      });
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <ServerStatus label="Operational" count={servers.ok} color="text-teal-400" />
      <ServerStatus label="Warning" count={servers.warning} color="text-amber-400" />
      <ServerStatus label="Incidents" count={servers.incident} color="text-red-400" />
    </div>
  );
}
