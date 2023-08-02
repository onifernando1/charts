import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

function ScatterGraph(props) {
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  const options = {};

  const data = {
    datasets: [
      {
        label: "A dataset",
        data: [
          { x: 1, y: 1 },
          { x: 3, y: 3 },
          { x: 4, y: 8 },
          { x: 10, y: 12 },
        ],
        backgroundColor: "black",
        pointStyle: "crossRot",
        borderColor: "black",
      },
    ],
  };

  return (
    <div>
      <Scatter options={options} data={data} />;
    </div>
  );
}

export default ScatterGraph;
