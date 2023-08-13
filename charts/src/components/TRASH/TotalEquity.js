import React from "react";
import { useState, useEffect } from "react";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
} from "../../functions/dataExtraction";
import BarChart from "../BarChart";

function TotalEquity(props) {
  const requestData = props.data;
  const [dateArray, setDateArray] = useState("");
  const [totalEquityArray, setTotalEquityArray] = useState("");

  useEffect(() => {
    getDateAndCashFlowDataFromRequest();
  }, [props.data]);

  const getDateAndCashFlowDataFromRequest = () => {
    const lastFiveYearsData = getXYearsDataFromRequest(requestData, 5);
    setDateArray(getPropertyArrayFromData(lastFiveYearsData, "date"));
    setTotalEquityArray(
      getPropertyArrayFromData(lastFiveYearsData, "totalEquity")
    );
  };

  return (
    <div className="default-container">
      <div className="total-equity-title">Total Equity</div>
      <BarChart
        x={dateArray}
        dataset1={{
          label: "Total equity",
          data: totalEquityArray,
        }}
      />
    </div>
  );
}

export default TotalEquity;
