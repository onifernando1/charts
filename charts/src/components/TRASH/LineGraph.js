// import React from "react";
// import { Line } from "react-chartjs-2";
// import "../assets/styles/lineGraph.css";

// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale, // x axis
//   LinearScale, // y axis
//   PointElement,
//   Legend,
//   Tooltip,
// } from "chart.js";

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Legend,
//   Tooltip
// );

// function LineGraph(props) {
//   const xAxis = props.x;
//   const yAxis = props.y;
//   const dataset1 = props.dataset1;

//   const data = {
//     // labels: ["Mon", "Tue", "Wed"],
//     labels: xAxis,
//     datasets: [
//       {
//         label: dataset1.label,
//         // data: [6, 3, 9],
//         data: dataset1.data,
//         backgroundColor: "aqua",
//         borderColor: "black",
//         pointBorderColor: "aqua",
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: false,
//     },
//     scales: {
//       y: {
//         // min: 3,
//         // max: 6,
//       },
//     },
//   };

//   return (
//     <div className="line-graph">
//       <Line data={data} options={options}></Line>
//     </div>
//   );
// }

// export default LineGraph;
