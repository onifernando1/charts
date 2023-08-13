import React from "react";
import { useState, useEffect } from "react";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  getDateAndPropertyArrayFromData,
} from "../../functions/dataExtraction";
import PieChart from "../PieChart";
import "../assets/styles/gross-profit-revenue.css";

function GrossProfitRevenue(props) {
  const requestData = props.data;
  const [grossProfitArray, setGrossProfitArray] = useState("");
  const [revenueArray, setRevenueArray] = useState("");
  const [remainingRevenueArray, setRemainingRevenueArray] = useState("");
  const [dataArray, setDataArray] = useState("");

  useEffect(() => {
    getGrossProfitAndRemainingRevenueArrayFromData();
  }, [props.data]);

  const getGrossProfitAndRemainingRevenueArrayFromData = () => {
    const lastYearData = requestData[0];
    const grossProfit = lastYearData.grossProfit;
    const revenue = lastYearData.revenue;
    const remainingRevenue = revenue - grossProfit;
    setDataArray([grossProfit, remainingRevenue]);
  };

  return (
    <div className="gross-profit-revenue-container">
      <div className="gross-profit-revenue-title">Gross Profit Ratio</div>
      <PieChart
        labels={["Gross Profit", "Remaining Revenue"]}
        dataset1={dataArray}
        colors={["aqua", "orange"]}
      />
    </div>
  );
}

export default GrossProfitRevenue;
