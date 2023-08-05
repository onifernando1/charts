import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "../assets/styles/lineGraph.css";

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

function LineGraphAny(props) {
  const xAxis = props.x;
  const yAxis = props.y;
  const allDatasets = props.datasets;
  const [formattedDatasetsArray, setFormattedDatasetsArray] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    let tDatasetsArray = getDatasets();
    const formattedDataA = formatDatasets(tDatasetsArray);
    setFormattedDatasetsArray(formattedDataA);
    const tempData = createDataFromArrays(formattedDataA);
    setData(tempData);
  }, [props.datasets]);

  const getDatasets = () => {
    let datasetsArray = [];
    for (let i = 0; i < allDatasets.length; i++) {
      datasetsArray.push(allDatasets[i]);
    }
    return datasetsArray;
  };

  const formatDatasets = (datasetsArray) => {
    let tempDatasetsArray = datasetsArray;
    for (let i = 0; i < datasetsArray.length; i++) {
      switch (i) {
        case 0:
          datasetsArray[i].backgroundColor = "aqua";
          datasetsArray[i].borderColor = "aqua";
          datasetsArray[i].pointBorderColor = "aqua";
          //   datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 1:
          datasetsArray[i].backgroundColor = "red";
          datasetsArray[i].borderColor = "red";
          datasetsArray[i].pointBorderColor = "red";
          //   datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 2:
          datasetsArray[i].backgroundColor = "black";
          datasetsArray[i].borderColor = "black";
          datasetsArray[i].pointBorderColor = "black";
          //   datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 3:
          datasetsArray[i].backgroundColor = "pink";
          datasetsArray[i].borderColor = "pink";
          datasetsArray[i].pointBorderColor = "pink";
          //   datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 4:
          datasetsArray[i].backgroundColor = "orange";
          datasetsArray[i].borderColor = "orange";
          datasetsArray[i].pointBorderColor = "orange";
          //   datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 5:
          datasetsArray[i].backgroundColor = "purple";
          datasetsArray[i].borderColor = "purple";
          datasetsArray[i].pointBorderColor = "purple";
          //   datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 6:
          datasetsArray[i].backgroundColor = "yellow";
          datasetsArray[i].borderColor = "yellow";
          datasetsArray[i].pointBorderColor = "yellow";
          //   datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 7:
          datasetsArray[i].backgroundColor = "grey";
          datasetsArray[i].borderColor = "grey";
          datasetsArray[i].pointBorderColor = "grey";
          //   datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 8:
          datasetsArray[i].backgroundColor = "blue";
          datasetsArray[i].borderColor = "blue";
          datasetsArray[i].pointBorderColor = "blue";
          //   datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 9:
          datasetsArray[i].backgroundColor = "maroon";
          datasetsArray[i].borderColor = "maroon";
          datasetsArray[i].pointBorderColor = "maroon";
          //   datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 10:
          datasetsArray[i].backgroundColor = "crimson";
          datasetsArray[i].borderColor = "crimson";
          datasetsArray[i].pointBorderColor = "crimson";
          //   datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
      }
    }
    return tempDatasetsArray;
    // setFormattedDatasetsArray(tempDatasetsArray);
  };

  //   const data = {
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

  const createDataFromArrays = (dataset) => {
    let tempObj = {};
    tempObj.labels = xAxis;
    tempObj.datasets = dataset;
    return tempObj;
  };

  //   const data = {
  //     labels: xAxis,
  //     datasets: [
  //       {
  //         label: allDatasets[0].label,
  //         // data: allDatasets[0].data,
  //         data: [1, 2, 3],
  //         backgroundColor: "aqua",
  //         borderColor: "black",
  //         pointBorderColor: "aqua",
  //         tension: 0.4,
  //       },
  //       {
  //         label: allDatasets[1].label,
  //         // data: allDatasets[1].data,
  //         data: [1, 2, 3],
  //         backgroundColor: "aqua",
  //         borderColor: "black",
  //         pointBorderColor: "aqua",
  //         tension: 0.4,
  //       },
  //     ],
  //   };

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

  const showMe = (x) => {
    console.log("called");
    console.log(x);
  };

  return (
    <div className="line-graph any">
      {data ? (
        <>
          <Line data={data} options={options}></Line>
        </>
      ) : null}
    </div>
  );
}

export default LineGraphAny;
