import React from "react";
import BarChart from "./BarChart";
import { useState, useEffect } from "react";
import "../assets/styles/incomeexpense.css";

function InterestIncomeExpense(props) {
  const [dateArray, setDateArray] = useState("");
  const [incomeArray, setIncomeArray] = useState("");
  const [expenseArray, setExpenseArray] = useState("");
  const requestData = props.data;

  useEffect(() => {
    getDateIncomeExpenseArraysFromOriginalRequest();
  }, [props.data]);

  const getLastFiveYearsFormRequestDataSorted = () => {
    let tempLastFiveYearsArray = [];
    for (let i = 4; i >= 0; i--) {
      tempLastFiveYearsArray.push(requestData[i]);
    }
    return tempLastFiveYearsArray;
  };

  const getDateInterestIncomeExpenseData = (data) => {
    let tempArray = [];
    for (let i = 0; i < data.length; i++) {
      const tempDate = data[i].date;
      const tempIncome = data[i].interestIncome;
      const tempExpense = data[i].interestExpense;
      const tempSortedData = [tempDate, tempIncome, tempExpense];
      tempArray.push(tempSortedData);
    }
    return tempArray;
  };

  const getDateInterestIncomeExpenseDataFromOriginalRequest = () => {
    const lastFiveYearsDataArray = getLastFiveYearsFormRequestDataSorted();
    const dateIncomeExpense = getDateInterestIncomeExpenseData(
      lastFiveYearsDataArray
    );
    return dateIncomeExpense;
  };

  const getDateArrayFromSortedData = (dataArray) => {
    let tempDateArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempDateArray.push(dataArray[i][0]);
    }
    // console.log(tempDateArray);
    setDateArray(tempDateArray);
    return tempDateArray;
  };

  const getIncomeArrayFromSortedData = (dataArray) => {
    let tempArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempArray.push(dataArray[i][1]);
    }
    // console.log(tempArray);
    setIncomeArray(tempArray);
    return tempArray;
  };

  const getExpenseArrayFromSortedData = (dataArray) => {
    let tempArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempArray.push(dataArray[i][2]);
    }
    // console.log(tempArray);
    setExpenseArray(tempArray);
    return tempArray;
  };

  const getDateIncomeExpenseArraysFromOriginalRequest = () => {
    const joinedArray = getDateInterestIncomeExpenseDataFromOriginalRequest();
    getDateArrayFromSortedData(joinedArray);
    getIncomeArrayFromSortedData(joinedArray);
    getExpenseArrayFromSortedData(joinedArray);
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
