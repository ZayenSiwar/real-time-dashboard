import React, { useEffect, useState } from "react";

const initial = [
  { id: 1, time: "12:47", text: "Log entry added" },
  { id: 2, time: "11:30", text: "Deployed new version" },
  { id: 3, time: "10:15", text: "Resolved ticket #4567" },
];

export default function RecentActivity() {
  const [items, setItems] = useState(initial);

  // simulate new activities
  useEffect(() => {
    const t = setInterval(() => {
      const rnd = Math.random();
      const newItem = {
        id: Date.now(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        text:
          rnd > 0.8
            ? "New critical alert"
            : rnd > 0.6
            ? "High CPU on server 12"
            : "Patch deployed",
      };
      setItems(prev => [newItem, ...prev].slice(0, 6));
    }, 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <h3 className="text-lg font-medium mb-3">Recent Activity</h3>
      <ul className="space-y-3">
        {items.map(it => (
          <li key={it.id} className="flex justify-between text-sm">
            <span className="text-gray-400">{it.time}</span>
            <span>{it.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
