import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const data = {
    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    datasets: [
      {
        label: "Utilisateurs actifs",
        data: [12, 19, 3, 5, 2, 3, 15],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Statistiques hebdomadaires" },
    },
  };

  return <Line data={data} options={options} />;
}
