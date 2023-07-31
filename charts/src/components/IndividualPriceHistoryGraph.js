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

function IndividualPriceHistoryGraph(props) {
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
  );

  const priceLabels = props.priceLabels;

  const priceData = props.priceData;

  const options = {
    plugins: {
      legend: { display: false },
    },
  };

  const data = {
    labels: priceLabels,
    datasets: [
      {
        label: "USD",
        data: priceData,
        backgroundColor: "blue",
        borderColor: "blue",
        pointRadius: 2,
        fill: true,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default IndividualPriceHistoryGraph;
