import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

function StackedBarChart(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 3, 5, 7],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Dataset 2",
        data: [1, 3, 5, 7],

        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Dataset 3",
        data: [1, 3, 5, 7],
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />;
    </div>
  );
}

export default StackedBarChart;
