import React from "react";
import { Bar } from "react-chartjs-2";
import "../assets/styles/barchart.css";

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

function BarChart(props) {
  const xAxis = props.x;
  const dataset1 = props.dataset1;

  const data = {
    labels: xAxis,
    datasets: [
      {
        label: dataset1.label,
        data: dataset1.data,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
        fill: true,
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
