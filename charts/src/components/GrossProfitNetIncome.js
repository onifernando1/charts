import React from "react";
import BarChart2 from "./BarChart2";
import { useState, useEffect } from "react";
import "../assets/styles/grossprofitnetincome.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  getDateAndPropertyArrayFromData,
} from "../functions/dataExtraction";

function GrossProfitNetIncome(props) {
  const [dateArray, setDateArray] = useState("");
  const [grossProfitArray, setGrossProfitArray] = useState("");
  const [netIncomeArray, setNetIncomeArray] = useState("");
  const requestData = props.data;

  useEffect(() => {
    getDateGrossProfitNetIncomeArraysFromOriginalRequest();
  }, [props.data]);

  const getDateGrossProfitNetIncomeArraysFromOriginalRequest = () => {
    const lastFiveYearsData = getXYearsDataFromRequest(requestData, 5);
    setDateArray(getPropertyArrayFromData(lastFiveYearsData, "date"));
    setGrossProfitArray(
      getPropertyArrayFromData(lastFiveYearsData, "grossProfit")
    );
    setNetIncomeArray(getPropertyArrayFromData(lastFiveYearsData, "netIncome"));
  };

  return (
    <div className="gross-profit-net-income-container">
      <div className="gross-profit-net-income-title">
        Gross Profit/Net income
      </div>
      <BarChart2
        x={dateArray}
        dataset1={{ data: grossProfitArray, label: "Gross Profit" }}
        dataset2={{ data: netIncomeArray, label: "Net Income" }}
      />
    </div>
  );
}

export default GrossProfitNetIncome;
