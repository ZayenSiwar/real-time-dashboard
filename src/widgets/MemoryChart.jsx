import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export default function MemoryChart() {
  const [labels, setLabels] = useState(() => Array.from({ length: 12 }).map((_, i) => `${i}`));
  const [dataPoints, setDataPoints] = useState(() => Array.from({ length: 12 }).map(() => 50 + Math.random() * 30));

  useEffect(() => {
    const t = setInterval(() => {
      setLabels(prev => [...prev.slice(1), new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })]);
      setDataPoints(prev => {
        const nextVal = Math.max(10, Math.min(100, prev[prev.length - 1] + (Math.random() - 0.5) * 5));
        return [...prev.slice(1), Math.round(nextVal)];
      });
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Memory %",
        data: dataPoints,
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(59,130,246,0.12)",
        borderColor: "rgba(59,130,246,0.9)",
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: { y: { min: 0, max: 100 } },
    plugins: { legend: { display: false }, title: { display: true, text: "Memory Usage (live)" } },
  };

  return <Line data={data} options={options} />;
}
