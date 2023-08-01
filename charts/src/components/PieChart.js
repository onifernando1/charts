import React from "react";
import { Pie } from "react-chartjs-2";
import "../assets/styles/piechart.css";

import { Chart as ChartJS, ArcElement, Legend, Tooltip, Title } from "chart.js";

ChartJS.register(ArcElement, Legend, Tooltip, Title);

function PieChart(props) {
  const pieLabels = props.labels;
  const dataset1 = props.dataset1;

  const data = {
    labels: pieLabels,
    datasets: [
      {
        data: dataset1,
        backgroundColor: ["aqua", "bloodorange", "purple", "green", "pink"],
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
    <div className="pie-chart">
      <Pie data={data} options={options}></Pie>
    </div>
  );
}

export default PieChart;
