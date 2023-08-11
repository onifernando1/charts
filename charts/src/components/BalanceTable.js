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

function BalanceTable(props) {
  const [dateArray, setDateArray] = useState("");
  const [revenueArray, setRevenueArray] = useState("");
  const [costOfRevenueArray, setCostOfRevenueArray] = useState("");

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
  const [finalColumnsArray, setFinalColumnsArray] = useState([]);

  const requestData = props.data;

  useEffect(() => {
    // getDateAndRevenueArraysFromOriginalRequest();
    createTableFromData();
  }, [props.data]);

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const lastFiveYearsDataDescending = getXYearsDataFromRequestNewestToOldest(
      requestData,
      5
    );

    const date = getPropertyArrayFromData(lastFiveYearsDataDescending, "date");
    const yearArray = getYearArray(date);
    setYearArray(yearArray);

    const cashAndEquivalents = createTableObject(
      "Cash And Cash Equivalents",
      "cashAndCashEquivalents",
      lastFiveYearsDataDescending,
      yearArray
    );

    const shortTermInvestments = createTableObject(
      "Short Term Investments",
      "shortTermInvestments",
      lastFiveYearsDataDescending,
      yearArray
    );

    const cashAndSTInvestments = createTableObject(
      "Cash And Short Term Investments",
      "cashAndShortTermInvestments",
      lastFiveYearsDataDescending,
      yearArray
    );

    const netReceivables = createTableObject(
      "Net Receivables",
      "netReceivables",
      lastFiveYearsDataDescending,
      yearArray
    );

    const inventory = createTableObject(
      "Inventory",
      "inventory",
      lastFiveYearsDataDescending,
      yearArray
    );

    const otherCurrentAssets = createTableObject(
      "Other Current Assets",
      "otherCurrentAssets",
      lastFiveYearsDataDescending,
      yearArray
    );

    const totalCurrentAssets = createTableObject(
      "Total Current Assets",
      "totalCurrentAssets",
      lastFiveYearsDataDescending,
      yearArray
    );

    const propertyPlantEquipmentNet = createTableObject(
      "Property Plant Equipment Net",
      "propertyPlantEquipmentNet",
      lastFiveYearsDataDescending,
      yearArray
    );

    const goodwill = createTableObject(
      "Goodwill",
      "goodwill",
      lastFiveYearsDataDescending,
      yearArray
    );

    const intangibleAssets = createTableObject(
      "Intangible Assets",
      "intangibleAssets",
      lastFiveYearsDataDescending,
      yearArray
    );

    const goodwillAndIntangibleAssets = createTableObject(
      "Goodwill and Intangible Assets",
      "goodwillAndIntangibleAssets",
      lastFiveYearsDataDescending,
      yearArray
    );

    const taxAssets = createTableObject(
      "Tax Assets",
      "taxAssets",
      lastFiveYearsDataDescending,
      yearArray
    );

    const tempA = [
      cashAndEquivalents,
      shortTermInvestments,
      cashAndSTInvestments,
      netReceivables,
      inventory,
      otherCurrentAssets,
      totalCurrentAssets,
      propertyPlantEquipmentNet,
      goodwill,
      intangibleAssets,
      goodwillAndIntangibleAssets,
      taxAssets,
    ];
    setJoinedDataArray(tempA);

    getAndSetFinalColumnsArray();
  };

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

  const columns = useMemo(
    () =>
      // [
      //   { Header: "", accessor: "category" },
      //   {
      //     Header: "2022",
      //     accessor: "2022",
      //   },
      //   {
      //     Header: "2021",
      //     accessor: "2021",
      //   },
      //   {
      //     Header: "2020",
      //     accessor: "2020",
      //   },
      //   {
      //     Header: "2019",
      //     accessor: "2019",
      //   },
      //   {
      //     Header: "2018",
      //     accessor: "2018",
      //   },
      // ]
      finalColumnsArray,
    [finalColumnsArray]
  );

  return (
    <div className="income table">
      <div className="table-title">Balance Table</div>
      {joinedDataArray.length >= 1 ? (
        <Table columns={columns} data={joinedDataArray} />
      ) : null}
    </div>
  );
}

export default BalanceTable;
