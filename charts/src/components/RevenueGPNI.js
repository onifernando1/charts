import React from "react";
import { useState, useEffect } from "react";
import LineGraph from "./LineGraph";
import "../assets/styles/revenueovertime.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  getDateAndPropertyArrayFromData,
} from "../functions/dataExtraction";

function RevenueGPNI(props) {
  const [currentRequestData, setCurrentRequestData] = useState([]);
  const [dateArray, setDateArray] = useState("");
  const [revenueArray, setRevenueArray] = useState("");
  const [grossProfitArray, setGrossProfitArray] = useState("");
  const [netIncomeArray, setNetIncomeArray] = useState("");

  const requestData = props.data;

  useEffect(() => {
    getDateAndRevenueArraysFromOriginalRequest();
  }, [props.data]);

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const lastTenYearsData = getXYearsDataFromRequest(requestData, 10);
    setDateArray(getPropertyArrayFromData(lastTenYearsData, "date"));
    setRevenueArray(getPropertyArrayFromData(lastTenYearsData, "revenue"));
    setGrossProfitArray(
      getPropertyArrayFromData(lastTenYearsData, "grossProfit")
    );
    setNetIncomeArray(getPropertyArrayFromData(lastTenYearsData, "netIncome"));
  };

  return (
    <div className="default-container">
      <div className="revnue-over-time-title">
        Revenue, Gross Profit, Net Income
      </div>
      <div className="revenue-line-graph">
        <LineGraph
          x={dateArray}
          dataset1={{ data: revenueArray, label: "$" }}
          dataset2={{ data: grossProfitArray, label: "$" }}
          dataset3={{ data: netIncomeArray, label: "$" }}
        />
      </div>
    </div>
  );
}

export default RevenueGPNI;
