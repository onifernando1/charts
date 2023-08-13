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

// function LineGraph3(props) {
//   const xAxis = props.x;
//   const yAxis = props.y;
//   const dataset1 = props.dataset1;
//   const dataset2 = props.dataset2;
//   const dataset3 = props.dataset3;

//   const data = {
//     labels: xAxis,
//     datasets: [
//       {
//         label: dataset1.label,
//         data: dataset1.data,
//         backgroundColor: "black",
//         borderColor: "black",
//         pointBorderColor: "black",
//         fill: true,
//         tension: 0.4,
//       },
//       {
//         label: dataset2.label,
//         data: dataset2.data,
//         backgroundColor: "red",
//         borderColor: "red",
//         pointBorderColor: "red",
//         fill: true,
//         tension: 0.4,
//       },
//       {
//         label: dataset3.label,
//         data: dataset3.data,
//         backgroundColor: "green",
//         borderColor: "green",
//         pointBorderColor: "green",
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: true,
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

// export default LineGraph3;
