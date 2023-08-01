import React from "react";
import BarChart from "./BarChart";
import { useState, useEffect } from "react";
import { requestData } from "../sampleData/requestData";

function GrossProfitNetIncome(props) {
  const [dateArray, setDateArray] = useState("");
  const [grossProfitArray, setGrossProfitArray] = useState("");
  const [netIncomeArray, setNetIncomeArray] = useState("");

  useEffect(() => {
    getDateGrossProfitNetIncomeArraysFromOriginalRequest();
  }, []);

  const getLastFiveYearsFormRequestDataSorted = () => {
    let tempLastFiveYearsArray = [];
    for (let i = 4; i >= 0; i--) {
      tempLastFiveYearsArray.push(requestData[i]);
    }
    return tempLastFiveYearsArray;
  };

  const getDateGrossProfitNetIncomeData = (data) => {
    let tempArray = [];
    for (let i = 0; i < data.length; i++) {
      const tempDate = data[i].date;
      const tempGrossProfit = data[i].grossProfit;
      const tempNetIncome = data[i].netIncome;
      const tempSortedData = [tempDate, tempGrossProfit, tempNetIncome];
      tempArray.push(tempSortedData);
    }
    return tempArray;
  };

  const getDateGrossProfitNetIncomeDataFromOriginalRequest = () => {
    const lastFiveYearsDataArray = getLastFiveYearsFormRequestDataSorted();
    const dateGrossProfitNetIncomeArray = getDateGrossProfitNetIncomeData(
      lastFiveYearsDataArray
    );
    return dateGrossProfitNetIncomeArray;
  };

  const getDateArrayFromSortedData = (dataArray) => {
    let tempDateArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempDateArray.push(dataArray[i][0]);
    }
    console.log(tempDateArray);
    setDateArray(tempDateArray);
    return tempDateArray;
  };

  const getGrossProfitArrayFromSortedData = (dataArray) => {
    let tempArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempArray.push(dataArray[i][1]);
    }
    console.log(tempArray);
    setGrossProfitArray(tempArray);
    return tempArray;
  };

  const getNetIncomeArrayFromSortedData = (dataArray) => {
    let tempArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempArray.push(dataArray[i][2]);
    }
    console.log(tempArray);
    setNetIncomeArray(tempArray);
    return tempArray;
  };

  const getDateGrossProfitNetIncomeArraysFromOriginalRequest = () => {
    const joinedArray = getDateGrossProfitNetIncomeDataFromOriginalRequest();
    getDateArrayFromSortedData(joinedArray);
    getGrossProfitArrayFromSortedData(joinedArray);
    getNetIncomeArrayFromSortedData(joinedArray);
  };

  return (
    <div>
      <BarChart
        x={dateArray}
        dataset1={grossProfitArray}
        dataset2={netIncomeArray}
      />
    </div>
  );
}

export default GrossProfitNetIncome;
