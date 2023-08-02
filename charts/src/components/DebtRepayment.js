import React from "react";
import { useState, useEffect } from "react";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
} from "../functions/dataExtraction";
import BarChart from "./BarChart";

function DebtRepayment(props) {
  const requestData = props.data;
  const [dateArray, setDateArray] = useState("");
  const [debtRepaymentArray, setDebtRepaymentArray] = useState("");

  useEffect(() => {
    getDateAndCashFlowDataFromRequest();
  }, [props.data]);

  const getDateAndCashFlowDataFromRequest = () => {
    const lastFiveYearsData = getXYearsDataFromRequest(requestData, 5);
    setDateArray(getPropertyArrayFromData(lastFiveYearsData, "date"));
    setDebtRepaymentArray(
      getPropertyArrayFromData(lastFiveYearsData, "debtRepayment")
    );
  };

  return (
    <div className="default-container">
      <div className="debt-repayment-title">Debt Repayment</div>
      <BarChart
        x={dateArray}
        dataset1={{
          label: "Debt Repayment",
          data: debtRepaymentArray,
        }}
      />
    </div>
  );
}

export default DebtRepayment;
