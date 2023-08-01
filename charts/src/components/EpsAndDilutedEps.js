import React from "react";
import BarChart from "./BarChart";
import { useState, useEffect } from "react";
import { requestData } from "../sampleData/requestData";
import "../assets/styles/epsdiluted.css";

function EpsAndDilutedEps(props) {
  const [dateArray, setDateArray] = useState("");
  const [epsArray, setEpsArray] = useState("");
  const [dilutedEpsArray, setDilutedEpsArray] = useState("");
  const requestData = props.data;

  useEffect(() => {
    getDateEpsDilutedEpsArraysFromOriginalRequest();
  }, []);

  const getLastFiveYearsFormRequestDataSorted = () => {
    let tempLastFiveYearsArray = [];
    for (let i = 4; i >= 0; i--) {
      tempLastFiveYearsArray.push(requestData[i]);
    }
    return tempLastFiveYearsArray;
  };

  const getDateEpsDilutedEpsData = (data) => {
    let tempArray = [];
    for (let i = 0; i < data.length; i++) {
      const tempDate = data[i].date;
      const tempEps = data[i].eps;
      const tempDilutedEps = data[i].epsdiluted;
      const tempSortedData = [tempDate, tempEps, tempDilutedEps];
      tempArray.push(tempSortedData);
    }
    return tempArray;
  };

  const getDateEpsDilutedEpsDataFromOriginalRequest = () => {
    const lastFiveYearsDataArray = getLastFiveYearsFormRequestDataSorted();
    const dateEpsDilutedEps = getDateEpsDilutedEpsData(lastFiveYearsDataArray);
    return dateEpsDilutedEps;
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

  const getEpsArrayFromSortedData = (dataArray) => {
    let tempArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempArray.push(dataArray[i][1]);
    }
    console.log(tempArray);
    setEpsArray(tempArray);
    return tempArray;
  };

  const getDilutedEpsArrayFromSortedData = (dataArray) => {
    let tempArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempArray.push(dataArray[i][2]);
    }
    console.log(tempArray);
    setDilutedEpsArray(tempArray);
    return tempArray;
  };

  const getDateEpsDilutedEpsArraysFromOriginalRequest = () => {
    const joinedArray = getDateEpsDilutedEpsDataFromOriginalRequest();
    getDateArrayFromSortedData(joinedArray);
    getEpsArrayFromSortedData(joinedArray);
    getDilutedEpsArrayFromSortedData(joinedArray);
  };

  return (
    <div className="eps-diluted-container">
      <div className="eps-diluted-title">EPS/Diluted EPS</div>
      <BarChart x={dateArray} dataset1={epsArray} dataset2={dilutedEpsArray} />
    </div>
  );
}

export default EpsAndDilutedEps;
