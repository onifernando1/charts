import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function LineGraph(props) {
  const xAxis = props.x;
  const yAxis = props.y;

  const data = {
    // labels: ["Mon", "Tue", "Wed"],
    labels: xAxis,
    datasets: [
      {
        label: "Sales of the week",
        // data: [6, 3, 9],
        data: yAxis,
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        // min: 3,
        // max: 6,
      },
    },
  };

  return (
    <div className="line-graph">
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default LineGraph;
