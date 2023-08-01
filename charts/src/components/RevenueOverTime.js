import React from "react";
import { useState, useEffect } from "react";
import { requestData } from "../sampleData/requestData";
import LineGraph from "./LineGraph";
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

function RevenueOverTime(props) {
  const [currentRequestData, setCurrentRequestData] = useState([]);
  const [dateArray, setDateArray] = useState("");
  const [revenueArray, setRevenueArray] = useState("");

  useEffect(() => {
    getDateAndRevenueArraysFromOriginalRequest();
  }, []);

  const getLastTenYearsFormRequestDataSorted = () => {
    let tempLastTenYearsArray = [];
    for (let i = 9; i >= 0; i--) {
      tempLastTenYearsArray.push(requestData[i]);
    }
    return tempLastTenYearsArray;
  };

  const getDateAndRevenueData = (data) => {
    let tempDateAndRevenueArray = [];
    for (let i = 0; i < data.length; i++) {
      const tempDate = data[i].date;
      const tempRevenue = data[i].revenue;
      const tempSortedData = [tempDate, tempRevenue];
      tempDateAndRevenueArray.push(tempSortedData);
    }
    return tempDateAndRevenueArray;
  };

  const getDateAndRevenueDataFromOriginalRequest = () => {
    const lastTenYearsDataArray = getLastTenYearsFormRequestDataSorted();
    const dateAndRevenueArray = getDateAndRevenueData(lastTenYearsDataArray);
    console.log(dateAndRevenueArray);
    return dateAndRevenueArray;
  };

  const getDateArrayFromSortedData = (dataArray) => {
    const tempDateArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempDateArray.push(dataArray[i][0]);
    }
    console.log(tempDateArray);
    setDateArray(tempDateArray);
    return tempDateArray;
  };

  const getRevenueArrayFromSortedData = (dataArray) => {
    const tempRevenueArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempRevenueArray.push(dataArray[i][1]);
    }
    console.log(tempRevenueArray);
    setRevenueArray(tempRevenueArray);
    return tempRevenueArray;
  };

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const joinedDateAndRevenueArray =
      getDateAndRevenueDataFromOriginalRequest();
    const dateArray = getDateArrayFromSortedData(joinedDateAndRevenueArray);
    const revenueArray = getRevenueArrayFromSortedData(
      joinedDateAndRevenueArray
    );
  };

  const data = {
    labels: dateArray,
    datasets: [
      {
        label: "",
        data: revenueArray,
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
    <div className="revenue-line-graph">
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default RevenueOverTime;
