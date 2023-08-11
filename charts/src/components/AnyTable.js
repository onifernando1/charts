import React from "react";
import { useState, useEffect, useMemo } from "react";
import "../assets/styles/overview.css";
import "../assets/styles/income-table.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  indexNumberConverter,
  getXYearsDataFromRequestNewestToOldest,
} from "../functions/dataExtraction";
import Table from "./Table";

function AnyTable(props) {
  const [joinedDataArray, setJoinedDataArray] = useState({});
  const [finalColumnsArray, setFinalColumnsArray] = useState([]);

  const requestData = props.data;
  const title = props.title;

  useEffect(() => {
    // getDateAndRevenueArraysFromOriginalRequest();
    createTableFromData();
  }, [props.data]);

  const camelCaseToTitle = (camelCaseTitle) => {
    // will not work with acronyms yet
    let initialString = camelCaseTitle;
    let newStringArray = [];
    for (let i = 0; i < camelCaseTitle.length; i++) {
      if (i == 0) {
        newStringArray.push(initialString[i].toUpperCase());
      } else if (initialString[i] == initialString[i].toUpperCase()) {
        newStringArray.push(" ");
        newStringArray.push(initialString[i]);
      } else if (initialString[i] == initialString[i].toLowerCase()) {
        newStringArray.push(initialString[i]);
      }
    }
    let newString = newStringArray.join("");
    return newString;
  };

  const createTableObject = (propertyTitle, property, dataArray, yearArray) => {
    let object = { category: propertyTitle };
    for (let i = 0; i < yearArray.length; i++) {
      object[yearArray[i]] = dataArray[i][property];
    }
    return object;
  };

  const getYearArray = (array) => {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
      let tempYear = array[i].substring(0, 4);
      tempArray.push(tempYear);
    }
    return tempArray;
  };

  const createColumns = (yearArray) => {
    let colArray = [{ Header: "Data", accessor: "category" }];
    for (let i = 0; i < yearArray.length; i++) {
      let tempObj = { Header: yearArray[i], accessor: yearArray[i] };
      colArray.push(tempObj);
    }
    return colArray;
  };

  const getAndSetFinalColumnsArray = () => {
    const currentLastFiveYearsDataDescending =
      getXYearsDataFromRequestNewestToOldest(requestData, 5);
    let currentDate = getPropertyArrayFromData(
      currentLastFiveYearsDataDescending,
      "date"
    );
    let currentYearArray = getYearArray(currentDate);
    setFinalColumnsArray(createColumns(currentYearArray));
  };

  const createTableFromData = () => {
    let tableArray = [];

    let lastFiveYearsDataDescending = getXYearsDataFromRequestNewestToOldest(
      requestData,
      5
    );

    let date = getPropertyArrayFromData(lastFiveYearsDataDescending, "date");
    let yearArray = getYearArray(date);

    for (let i = 0; i < lastFiveYearsDataDescending.length; i++) {
      //   console.log(lastFiveYearsDataDescending[i]);
    }
    const dataKeys = Object.keys(lastFiveYearsDataDescending[0]);

    for (let i = 0; i < dataKeys.length; i++) {
      if (dataKeys[i] != "link" && dataKeys[i] != "finalLink") {
        let tempTableArray = createTableObject(
          camelCaseToTitle(dataKeys[i]),
          dataKeys[i],
          lastFiveYearsDataDescending,
          yearArray
        );
        tableArray.push(tempTableArray);
      }
    }

    setJoinedDataArray(tableArray);
    getAndSetFinalColumnsArray();

    return tableArray;
  };

  const columns = useMemo(() => finalColumnsArray, [finalColumnsArray]);

  return (
    <div className="income table">
      <div className="table-title">{title}</div>
      {joinedDataArray.length >= 1 ? (
        <Table columns={columns} data={joinedDataArray} />
      ) : null}
    </div>
  );
}

export default AnyTable;
