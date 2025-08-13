import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function CpuChart() {
  const [labels, setLabels] = useState(() => {
    const now = Date.now();
    return Array.from({ length: 12 }).map((_, i) => {
      const d = new Date(now - (11 - i) * 5 * 60 * 1000); // 5min steps
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    });
  });

  const [dataPoints, setDataPoints] = useState(() => Array.from({ length: 12 }).map(() => 40 + Math.random() * 40));

  useEffect(() => {
    const t = setInterval(() => {
      setLabels(prev => {
        const next = [...prev.slice(1), new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })];
        return next;
      });
      setDataPoints(prev => {
        const nextVal = Math.max(10, Math.min(100, prev[prev.length - 1] + (Math.random() - 0.45) * 8));
        return [...prev.slice(1), Math.round(nextVal)];
      });
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "CPU %",
        data: dataPoints,
        tension: 0.3,
        fill: true,
        backgroundColor: "rgba(16,185,129,0.12)",
        borderColor: "rgba(16,185,129,0.9)",
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: { y: { min: 0, max: 100 } },
    plugins: { legend: { display: false }, title: { display: true, text: "CPU Usage (live)" } },
  };

  return <Line data={data} options={options} />;
}
