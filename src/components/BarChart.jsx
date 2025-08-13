import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const data = {
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil"],
    datasets: [
      {
        label: "Ventes",
        data: [30, 50, 40, 60, 70, 55, 80],
        backgroundColor: "rgba(255, 206, 86, 0.7)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Ventes mensuelles" },
    },
  };

  return <Bar data={data} options={options} />;
}
