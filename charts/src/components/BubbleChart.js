import React from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip
);

function BubbleChart() {
  const data = {
    labels: ["label", "label"],
    datasets: [
      {
        label: "Bubble Chart",
        data: [{ x: 10, y: 20, r: 5 }],
        backgroundColor: "red",
      },
      {
        label: "Bubble Chart2",
        data: [{ x: 5, y: 10, r: 2 }],
        backgroundColor: "aqua",
      },
      {
        label: "Bubble Chart3",
        data: [{ x: 7, y: 15, r: 20 }],
        backgroundColor: "green",
      },
      {
        label: "Bubble Chart3",
        data: [{ x: 7, y: 9, r: 17 }],
        backgroundColor: "black",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="bubble-chart">
      <Bubble data={data} options={options} />
    </div>
  );
}

export default BubbleChart;
