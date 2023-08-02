import React from "react";
import { useState, useEffect } from "react";
import LineGraph from "./LineGraph";
import "../assets/styles/revenueovertime.css";

function RevenueOverTime(props) {
  const [currentRequestData, setCurrentRequestData] = useState([]);
  const [dateArray, setDateArray] = useState("");
  const [revenueArray, setRevenueArray] = useState("");
  const requestData = props.data;

  useEffect(() => {
    getDateAndRevenueArraysFromOriginalRequest();
  }, [props.data]);

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
    // console.log(dateAndRevenueArray);
    return dateAndRevenueArray;
  };

  const getDateArrayFromSortedData = (dataArray) => {
    const tempDateArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempDateArray.push(dataArray[i][0]);
    }
    // console.log(tempDateArray);
    setDateArray(tempDateArray);
    return tempDateArray;
  };

  const getRevenueArrayFromSortedData = (dataArray) => {
    const tempRevenueArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempRevenueArray.push(dataArray[i][1]);
    }
    // console.log(tempRevenueArray);
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

  return (
    <div className="revenue-over-time-container">
      <div className="revnue-over-time-title">Revenue Over Time</div>
      <div className="revenue-line-graph">
        <LineGraph
          x={dateArray}
          dataset1={{ data: revenueArray, label: "$" }}
        />
      </div>
    </div>
  );
}

export default RevenueOverTime;
