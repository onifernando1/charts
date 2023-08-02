import React from "react";
import BarChart from "./BarChart";
import { useState, useEffect } from "react";
import "../assets/styles/incomeexpense.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  getDateAndPropertyArrayFromData,
} from "../functions/dataExtraction";

function InterestIncomeExpense(props) {
  const [dateArray, setDateArray] = useState("");
  const [incomeArray, setIncomeArray] = useState("");
  const [expenseArray, setExpenseArray] = useState("");
  const requestData = props.data;

  useEffect(() => {
    getDateIncomeExpenseArraysFromOriginalRequest();
  }, [props.data]);

  const getDateIncomeExpenseArraysFromOriginalRequest = () => {
    const lastFiveYearsData = getXYearsDataFromRequest(requestData, 5);
    setDateArray(getPropertyArrayFromData(lastFiveYearsData, "date"));
    setIncomeArray(
      getPropertyArrayFromData(lastFiveYearsData, "interestIncome")
    );
    setExpenseArray(
      getPropertyArrayFromData(lastFiveYearsData, "interestExpense")
    );
  };

  return (
    <div className="income-expense-container">
      <div className="income-expense-title">
        Interest Income / Interest Expense
      </div>
      <BarChart
        x={dateArray}
        dataset1={{ data: incomeArray, label: "Income" }}
        dataset2={{ data: expenseArray, label: "Expenses" }}
      />
    </div>
  );
}

export default InterestIncomeExpense;
