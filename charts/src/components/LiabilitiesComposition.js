import React from "react";
import { useState, useEffect } from "react";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  getDateAndPropertyArrayFromData,
} from "../functions/dataExtraction";
import PieChart from "./PieChart";

function LiabilitiesComposition(props) {
  const requestData = props.data;
  const [dataArray, setDataArray] = useState("");

  useEffect(() => {
    getGrossProfitAndRemainingRevenueArrayFromData();
  }, [props.data]);

  const getGrossProfitAndRemainingRevenueArrayFromData = () => {
    const lastYearData = requestData[0];
    const accountPayables = lastYearData.accountPayables;
    const shortTermDebt = lastYearData.shortTermDebt;
    const deferredRevenue = lastYearData.shortTermDebt;
    setDataArray([accountPayables, shortTermDebt, deferredRevenue]);
  };

  return (
    <div className="default-container">
      <div className="liabilities-comp-title">Liabilities Composition 2022</div>
      <PieChart
        labels={["Account Payables", "Short Term Debt", "Deferred Revenue"]}
        dataset1={dataArray}
        colors={["aqua", "orange", "pink"]}
      />
    </div>
  );
}

export default LiabilitiesComposition;
