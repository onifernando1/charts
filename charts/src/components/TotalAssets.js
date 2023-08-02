import React, { useState } from "react";
import LineGraph from "./LineGraph";
import { useEffect } from "react";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
} from "../functions/dataExtraction";

function TotalAssets(props) {
  const [dateArray, setDateArray] = useState("");
  const [totalAssetsArray, setTotalAssetsArray] = useState("");
  const requestData = props.data;

  useEffect(() => {
    getDateAndCashEndDataFromRequest();
  }, [props.data]);

  const getDateAndCashEndDataFromRequest = () => {
    const lastTenYearsData = getXYearsDataFromRequest(requestData, 10);
    setDateArray(getPropertyArrayFromData(lastTenYearsData, "date"));
    setTotalAssetsArray(
      getPropertyArrayFromData(lastTenYearsData, "totalAssets")
    );
  };

  return (
    <div className="default-container">
      <div className="total-assets-title">Total Assets</div>
      <LineGraph
        x={dateArray}
        dataset1={{ data: totalAssetsArray, label: "$" }}
      />
    </div>
  );
}

export default TotalAssets;
