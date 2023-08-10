import React from "react";
import { useState, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import "../assets/styles/area-chart-any.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function AreaChartAny(props) {
  const transparency = 0.1;
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
          datasetsArray[i].backgroundColor = `rgba(89,203,232,${transparency})`;
          datasetsArray[i].borderColor = `rgb(89,203,232)`;
          datasetsArray[i].pointBorderColor = `rgb(89,203,232)`;
          datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 1:
          datasetsArray[i].backgroundColor = `rgba(255,153,51,${transparency})`;
          datasetsArray[i].borderColor = `rgb(255,153,51)`;
          datasetsArray[i].pointBorderColor = `rgb(255,153,51)`;
          datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 2:
          datasetsArray[
            i
          ].backgroundColor = `rgba(102, 255, 102,${transparency})`;
          datasetsArray[i].borderColor = "rgb(102, 255, 102)";
          datasetsArray[i].pointBorderColor = "rgb(102, 255, 102)";
          datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 3:
          datasetsArray[
            i
          ].backgroundColor = `rgba(255, 0, 204,${transparency})`;
          datasetsArray[i].borderColor = "rgb(255, 0, 204)";
          datasetsArray[i].pointBorderColor = "rgb(255, 0, 204)";
          datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 4:
          datasetsArray[
            i
          ].backgroundColor = `rgba(255, 255, 102, ${transparency})`;
          datasetsArray[i].borderColor = "rgb(255, 255, 102)";
          datasetsArray[i].pointBorderColor = "rgb(255, 255, 102)";
          datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 5:
          datasetsArray[i].backgroundColor = `rgba(27, 27, 27,${transparency})`;
          datasetsArray[i].borderColor = "rgb(27, 27, 27)";
          datasetsArray[i].pointBorderColor = "rgb(27, 27, 27)";
          datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 6:
          datasetsArray[
            i
          ].backgroundColor = `rgba(233, 54, 167,${transparency})`;
          datasetsArray[i].borderColor = "rgb(233, 54, 167)";
          datasetsArray[i].pointBorderColor = "rgb(233, 54, 167)";
          datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 7:
          datasetsArray[i].backgroundColor = `rgba(89,203,232,${transparency})`;
          datasetsArray[i].borderColor = "grey";
          datasetsArray[i].pointBorderColor = "grey";
          datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 8:
          datasetsArray[i].backgroundColor = `rgba(89,203,232,${transparency})`;
          datasetsArray[i].borderColor = "blue";
          datasetsArray[i].pointBorderColor = "blue";
          datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 9:
          datasetsArray[i].backgroundColor = `rgba(89,203,232,${transparency})`;
          datasetsArray[i].borderColor = "maroon";
          datasetsArray[i].pointBorderColor = "maroon";
          datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
        case 10:
          datasetsArray[i].backgroundColor = `rgba(89,203,232,${transparency})`;
          datasetsArray[i].borderColor = "crimson";
          datasetsArray[i].pointBorderColor = "crimson";
          datasetsArray[i].fill = true;
          datasetsArray[i].tension = 0.4;
          break;
      }
    }
    return tempDatasetsArray;
  };

  const createDataFromArrays = (dataset) => {
    let tempObj = {};
    tempObj.labels = xAxis;
    tempObj.datasets = dataset;
    return tempObj;
  };

  const options = {
    plugins: {
      legend: { labels: { color: "white", usePointStyle: true } },
    },
    scales: {
      x: { ticks: { color: "white" } },
      y: { ticks: { color: "white" } },
    },
  };

  return (
    <div className="area-chart-any">
      {data ? (
        <>
          <Line data={data} options={options}></Line>
        </>
      ) : null}
    </div>
  );
}

export default AreaChartAny;
