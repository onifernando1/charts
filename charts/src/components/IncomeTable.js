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

function IncomeTable(props) {
  const [dateArray, setDateArray] = useState("");
  const [revenueArray, setRevenueArray] = useState("");
  const [ebitdaArray, setEbitdaArray] = useState("");
  const [grossProfitArray, setGrossProfitArray] = useState("");
  const [netIncomeArray, setNetIncomeArray] = useState("");
  const [grossProfitRatioArray, setGrossProfitRatioArray] = useState("");
  const [operatingIncomeArray, setOperatingIncomeArray] = useState("");
  const [operatingExpensesArray, setOperatingExpensesArray] = useState("");
  const [dataArray, setDataArray] = useState([]);
  //
  const [yearArray, setYearArray] = useState("");
  const [revenueTableObject, setRevenueTableObject] = useState({});
  const [netIncomeObject, setNetIncomeObject] = useState({});
  const [joinedDataArray, setJoinedDataArray] = useState({});

  const requestData = props.data;

  useEffect(() => {
    getDateAndRevenueArraysFromOriginalRequest();
  }, [props.data]);

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const lastFiveYearsDataDescending = getXYearsDataFromRequestNewestToOldest(
      requestData,
      5
    );

    const date = getPropertyArrayFromData(lastFiveYearsDataDescending, "date");
    console.log(date);
    const yearArray = getYearArray(date);
    setYearArray(yearArray);
    console.log(yearArray);
    let revTable = createTableObject(
      "Revenue",
      "revenue",
      lastFiveYearsDataDescending,
      yearArray
    );

    let incomeTable = createTableObject(
      "Net Income",
      "netIncome",
      lastFiveYearsDataDescending,
      yearArray
    );

    setRevenueTableObject(
      createTableObject(
        "Revenue",
        "revenue",
        lastFiveYearsDataDescending,
        yearArray
      )
    );
    setNetIncomeObject(
      createTableObject(
        "Net Income",
        "netIncome",
        lastFiveYearsDataDescending,
        yearArray
      )
    );

    const tempA = [incomeTable, revTable];
    setJoinedDataArray(tempA);
    console.log(tempA);
  };

  const createTableObject = (propertyTitle, property, dataArray, yearArray) => {
    let object = { category: propertyTitle };
    for (let i = 0; i < yearArray.length; i++) {
      console.log(yearArray[i]);
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

  const columns = useMemo(
    () => [
      { Header: "Title", accessor: "category" },
      {
        Header: "2022",
        accessor: "2022",
      },
      {
        Header: "2021",
        accessor: "2021",
      },
      {
        Header: "2020",
        accessor: "2020",
      },
      {
        Header: "2019",
        accessor: "2019",
      },
      {
        Header: "2018",
        accessor: "2018",
      },
    ],
    []
  );

  return (
    <div className="income table">
      {joinedDataArray.length >= 1 ? (
        <Table columns={columns} data={joinedDataArray} />
      ) : null}
    </div>
  );
}

export default IncomeTable;
