import React from "react";
import { useState, useEffect } from "react";
import { requestData } from "../sampleData/requestData";

function RevenueOverTime(props) {
  const [currentRequestData, setCurrentRequestData] = useState([]);

  useEffect(() => {
    getDateAndRevenueDataFromOriginalRequest();
  }, []);

  const getLastTenYearsFormRequestData = () => {
    let tempLastTenYearsArray = [];
    for (let i = 0; i < 10; i++) {
      tempLastTenYearsArray.push(requestData[i]);
    }
    return tempLastTenYearsArray;
  };

  const getDateAndRevenueData = (data) => {
    let tempDateAndRevenueArray = [];
    for (let i = 0; i < data.length; i++) {
      const tempDate = data[i].date;
      const tempRevenue = data[i].revenue;
      const tempSortedData = { [tempDate]: tempRevenue };
      tempDateAndRevenueArray.push(tempSortedData);
    }
    return tempDateAndRevenueArray;
  };

  const getDateAndRevenueDataFromOriginalRequest = () => {
    const lastTenYearsDataArray = getLastTenYearsFormRequestData();
    const dateAndRevenueArray = getDateAndRevenueData(lastTenYearsDataArray);
    console.log(dateAndRevenueArray);
  };

  return <div>Hi</div>;
}

export default RevenueOverTime;
