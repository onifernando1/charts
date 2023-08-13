import React, { useState } from "react";
import LineGraph from "./LineGraph";
import { useEffect } from "react";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
} from "../../functions/dataExtraction";

function TotalLiabilities(props) {
  const [dateArray, setDateArray] = useState("");
  const [totalLiabilities, setTotalLiabilities] = useState("");
  const requestData = props.data;

  useEffect(() => {
    getDateAndCashEndDataFromRequest();
  }, [props.data]);

  const getDateAndCashEndDataFromRequest = () => {
    const lastTenYearsData = getXYearsDataFromRequest(requestData, 10);
    setDateArray(getPropertyArrayFromData(lastTenYearsData, "date"));
    setTotalLiabilities(
      getPropertyArrayFromData(lastTenYearsData, "totalLiabilities")
    );
  };

  return (
    <div className="default-container">
      <div className="total-liabilities-title">Total Liabilities</div>
      <LineGraph
        x={dateArray}
        dataset1={{ data: totalLiabilities, label: "$" }}
      />
    </div>
  );
}

export default TotalLiabilities;
