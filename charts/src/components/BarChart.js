import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, // x axis
  LinearScale, // y axis
  BarElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Title,
  BarElement
);

function BarChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed"],
    datasets: [
      {
        label: "369",
        data: [3, 6, 9],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      },
      {
        label: "333",
        data: [3, 3, 3],
        backgroundColor: "marine",
        borderColor: "black",
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        // min: 3,
        // max: 6,
      },
    },
  };

  return (
    <div className="bar-chart">
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default BarChart;
