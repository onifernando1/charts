import React, { useState } from "react";
import LineGraph from "./LineGraph";
import { useEffect } from "react";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
} from "../../functions/dataExtraction";

function CashEquivalents(props) {
  const [dateArray, setDateArray] = useState("");
  const [cashEquivalentsArray, setCashEquivalentsArray] = useState("");
  const requestData = props.data;

  useEffect(() => {
    getDateAndCashEndDataFromRequest();
  }, [props.data]);

  const getDateAndCashEndDataFromRequest = () => {
    const lastTenYearsData = getXYearsDataFromRequest(requestData, 10);
    setDateArray(getPropertyArrayFromData(lastTenYearsData, "date"));
    setCashEquivalentsArray(
      getPropertyArrayFromData(lastTenYearsData, "cashAndCashEquivalents")
    );
  };

  return (
    <div className="default-container">
      <div className="cash-equivalents-title">Cash and cash equivalents</div>
      <LineGraph
        x={dateArray}
        dataset1={{ data: cashEquivalentsArray, label: "$" }}
      />
    </div>
  );
}

export default CashEquivalents;
