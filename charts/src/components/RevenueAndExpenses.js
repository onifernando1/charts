import React from "react";
import { requestData } from "../sampleData/requestData";
import { useState, useEffect } from "react";
import PieChart from "./PieChart";

function RevenueAndExpenses() {
  const [revenueExpenseArray, setRevenueExpenseArray] = useState("");
  const labels = [
    "Revenue",
    "Cost of Revenue",
    "Research and Development Expenses",
    "General and Administrative Expenses",
    "Selling and Marketing Expenses",
  ];

  useEffect(() => {
    setRevenueExpenseArray(getRevenueAndExpenseArray());
  }, []);

  const getRevenueAndExpenseArray = () => {
    const tempArray = [];
    tempArray.push(requestData[0].revenue);
    tempArray.push(requestData[0].costOfRevenue);
    tempArray.push(requestData[0].researchAndDevelopmentExpenses);
    tempArray.push(requestData[0].generalAndAdministrativeExpenses);
    tempArray.push(requestData[0].sellingAndMarketingExpenses);
    return tempArray;
  };

  return (
    <>
      <div className="revenue-expenses-container">Revenue Expenses 2022</div>
      <div>
        <PieChart labels={labels} dataset1={revenueExpenseArray} />
      </div>
    </>
  );
}

export default RevenueAndExpenses;
