import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/overview.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  getDateAndPropertyArrayFromData,
} from "../functions/dataExtraction";
import LineGraphAny from "./LineGraphAny";

function RevenueGPNI(props) {
  const [currentRequestData, setCurrentRequestData] = useState([]);
  const [isChecked, setIsChecked] = useState("");
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

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="default-container">
      <div className="revnue-over-time-title">Custom </div>
      <div className="custom-income-checkbox"></div>
      <input
        type="checkbox"
        id="param"
        name="param"
        value="Revenue"
        checked={isChecked}
        onChange={handleChange}
      ></input>
      <div>
        <LineGraphAny
          datasets={[
            { label: "Revenue", data: revenueArray },
            { label: "Gross Profit", data: grossProfitArray },
            { label: "Net Income ", data: netIncomeArray },
          ]}
          x={dateArray}
        />
      </div>
    </div>
  );
}

export default RevenueGPNI;
