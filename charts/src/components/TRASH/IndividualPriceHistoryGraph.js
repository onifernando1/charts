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
import "../assets/styles/individualpricehistory.css";

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

  const percentageChange = props.percentageChange;

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
    <div className="individual-price-history-graph-container">
      <Line data={data} options={options} />
      <div className="percentage-change">{percentageChange}</div>
    </div>
  );
}

export default IndividualPriceHistoryGraph;
