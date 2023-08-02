import React from "react";
import { useState, useEffect } from "react";
import PieChart from "./PieChart";
import "../assets/styles/revenueexpenses.css";

function RevenueAndExpenses(props) {
  const [revenueExpenseArray, setRevenueExpenseArray] = useState("");
  const labels = [
    "Revenue",
    "Cost of Revenue",
    "Research and Development Expenses",
    "General and Administrative Expenses",
    "Selling and Marketing Expenses",
  ];
  const requestData = props.data;

  useEffect(() => {
    setRevenueExpenseArray(getRevenueAndExpenseArray());
  }, [props.data]);

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
      <div className="revenue-expenses-container">
        <div className="revenue-expenses-title">Revenue And Expenses 2022</div>
        <PieChart
          labels={labels}
          dataset1={revenueExpenseArray}
          colors={["aqua", "orange", "purple", "green", "pink"]}
        />
      </div>
    </>
  );
}

export default RevenueAndExpenses;
