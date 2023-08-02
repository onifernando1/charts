import React from "react";
import { useState, useEffect } from "react";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  getDateAndPropertyArrayFromData,
} from "../functions/dataExtraction";
import PieChart from "./PieChart";

function GrossProfitRevenue(props) {
  const requestData = props.data;
  const [grossProfitArray, setGrossProfitArray] = useState("");
  const [revenueArray, setRevenueArray] = useState("");
  const [remainingRevenueArray, setRemainingRevenueArray] = useState("");

  useEffect(() => {
    getGrossProfitAndRemainingRevenueArrayFromData();
  }, [props.data]);

  const getGrossProfitAndRemainingRevenueArrayFromData = () => {
    const lastYearData = getXYearsDataFromRequest(requestData, 1);
    setGrossProfitArray(getPropertyArrayFromData(lastYearData, "grossProfit"));
    const revenueArray = getPropertyArrayFromData(lastYearData, "revenue");
    const tempRemainingRevenueArray = getRemainingRevenueArray(
      revenueArray,
      grossProfitArray
    );
    setRemainingRevenueArray(tempRemainingRevenueArray);
  };

  const getRemainingRevenueArray = (revenueArray, grossProfitArray) => {
    let tempArray = [];
    for (let i = 0; i < revenueArray.length; i++) {
      let remainingRevenue = revenueArray[i] - grossProfitArray[i];
      tempArray.push(remainingRevenue);
    }
    return tempArray;
  };

  return (
    <div className="gross-profit-revenue-container">
      <PieChart
        pieLabels={["Gross Profit", "Remaining Revenue"]}
        dataset1={[grossProfitArray[0], remainingRevenueArray[0]]}
      />
    </div>
  );
}

export default GrossProfitRevenue;
