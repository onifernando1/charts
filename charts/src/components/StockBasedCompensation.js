import React from "react";
import { useState, useEffect } from "react";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
} from "../functions/dataExtraction";
import BarChart from "./BarChart";
import "../assets/styles/stock-based-comp.css";

function StockBasedCompensation(props) {
  const requestData = props.data;
  const [dateArray, setDateArray] = useState("");
  const [stockBasedCompArray, setStockBasedCompArray] = useState("");

  useEffect(() => {
    getDateAndCashFlowDataFromRequest();
  }, [props.data]);

  const getDateAndCashFlowDataFromRequest = () => {
    const lastFiveYearsData = getXYearsDataFromRequest(requestData, 5);
    setDateArray(getPropertyArrayFromData(lastFiveYearsData, "date"));
    setStockBasedCompArray(
      getPropertyArrayFromData(lastFiveYearsData, "stockBasedCompensation")
    );
  };

  return (
    <div className="stock-based-comp-container">
      <div className="stock-based-comp-title">Stock Based Compensation</div>
      <BarChart
        x={dateArray}
        dataset1={{
          label: "Stock Based Compensation",
          data: stockBasedCompArray,
        }}
      />
    </div>
  );
}

export default StockBasedCompensation;
