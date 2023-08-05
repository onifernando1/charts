import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/overview.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  getDateAndPropertyArrayFromData,
} from "../functions/dataExtraction";
import LineGraph3 from "./LineGraph3";
import LineGraphAny from "./LineGraphAny";

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
        {/* <LineGraph3
          x={dateArray}
          dataset1={{ data: revenueArray, label: "Revenue" }}
          dataset2={{ data: grossProfitArray, label: "Gross Profit" }}
          dataset3={{ data: netIncomeArray, label: "Net Income" }}
        /> */}
        <LineGraphAny
          datasets={[
            { label: "Revenue", data: revenueArray },
            { label: "Gross Profit", data: grossProfitArray },
          ]}
          x={dateArray}
        />
      </div>
    </div>
  );
}

export default RevenueGPNI;
