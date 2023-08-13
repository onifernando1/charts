import React from "react";
import { useState, useEffect } from "react";
import LineGraph from "./LineGraph";
import "../assets/styles/revenueovertime.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  getDateAndPropertyArrayFromData,
} from "../../functions/dataExtraction";

function RevenueOverTime(props) {
  const [currentRequestData, setCurrentRequestData] = useState([]);
  const [dateArray, setDateArray] = useState("");
  const [revenueArray, setRevenueArray] = useState("");
  const requestData = props.data;

  useEffect(() => {
    getDateAndRevenueArraysFromOriginalRequest();
  }, [props.data]);

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const lastTenYearsData = getXYearsDataFromRequest(requestData, 10);
    setDateArray(getPropertyArrayFromData(lastTenYearsData, "date"));
    setRevenueArray(getPropertyArrayFromData(lastTenYearsData, "revenue"));
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
