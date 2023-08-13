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
    getDateAndRevenueArraysFromOriginalRequest();
  }, [props.data]);

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const lastFiveYearsDataDescending = getXYearsDataFromRequestNewestToOldest(
      requestData,
      5
    );

    const date = getPropertyArrayFromData(lastFiveYearsDataDescending, "date");
    const yearArray = getYearArray(date);
    setYearArray(yearArray);
    let revTable = createTableObject(
      "Revenue",
      "revenue",
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

    const costOfRevenueArray = createTableObject(
      "Cost Of Revenue",
      "costOfRevenue",
      lastFiveYearsDataDescending,
      yearArray
    );

    const grossProfit = createTableObject(
      "Gross Profit",
      "grossProfit",
      lastFiveYearsDataDescending,
      yearArray
    );

    const grossProfitRatio = createTableObject(
      "Gross Profit Ratio",
      "grossProfitRatio",
      lastFiveYearsDataDescending,
      yearArray
    );

    const researchAndDevelopmentExpenses = createTableObject(
      "Research And Development Expenses",
      "researchAndDevelopmentExpenses",
      lastFiveYearsDataDescending,
      yearArray
    );

    const generalAndAdministrativeExpenses = createTableObject(
      "General And Admin Expenses",
      "generalAndAdministrativeExpenses",
      lastFiveYearsDataDescending,
      yearArray
    );

    const sellingAndMarketingExpenses = createTableObject(
      "Selling and Marketing Expenses",
      "sellingAndMarketingExpenses",
      lastFiveYearsDataDescending,
      yearArray
    );

    const sellingGeneralAndAdministrativeExpenses = createTableObject(
      "Selling General and Admin Expenses",
      "sellingGeneralAndAdministrativeExpenses",
      lastFiveYearsDataDescending,
      yearArray
    );

    const otherExpenses = createTableObject(
      "Other Expenses",
      "otherExpenses",
      lastFiveYearsDataDescending,
      yearArray
    );

    const operatingExpenses = createTableObject(
      "Operating Expenses",
      "operatingExpenses",
      lastFiveYearsDataDescending,
      yearArray
    );

    const costAndExpenses = createTableObject(
      "Cost And Expenses",
      "costAndExpenses",
      lastFiveYearsDataDescending,
      yearArray
    );

    const interestIncome = createTableObject(
      "Interest Income",
      "interestIncome",
      lastFiveYearsDataDescending,
      yearArray
    );

    const interestExpense = createTableObject(
      "Interest Expense",
      "interestExpense",
      lastFiveYearsDataDescending,
      yearArray
    );

    const depreciationAndAmortization = createTableObject(
      "Depreciation and Amortization",
      "depreciationAndAmortization",
      lastFiveYearsDataDescending,
      yearArray
    );

    const ebitda = createTableObject(
      "Ebitda",
      "ebitda",
      lastFiveYearsDataDescending,
      yearArray
    );

    const ebitdaRatio = createTableObject(
      "Ebitda Ratio",
      "ebitdaratio",
      lastFiveYearsDataDescending,
      yearArray
    );

    const operatingIncome = createTableObject(
      "Operating Income",
      "operatingIncome",
      lastFiveYearsDataDescending,
      yearArray
    );

    const operatingIncomeRatio = createTableObject(
      "Operating Income Ratio",
      "operatingIncomeRatio",
      lastFiveYearsDataDescending,
      yearArray
    );

    const totalOtherIncomeExpensesNet = createTableObject(
      "Total Other Income Expenses Net",
      "totalOtherIncomeExpensesNet",
      lastFiveYearsDataDescending,
      yearArray
    );

    const incomeBeforeTax = createTableObject(
      "Income Before Tax",
      "incomeBeforeTax",
      lastFiveYearsDataDescending,
      yearArray
    );

    const incomeBeforeTaxRatio = createTableObject(
      "Income Before Tax Ratio",
      "incomeBeforeTaxRatio",
      lastFiveYearsDataDescending,
      yearArray
    );

    const incomeTaxExpense = createTableObject(
      "Income Tax Expense",
      "incomeTaxExpense",
      lastFiveYearsDataDescending,
      yearArray
    );

    const netIncome = createTableObject(
      "Net Income",
      "netIncome",
      lastFiveYearsDataDescending,
      yearArray
    );

    const netIncomeRatio = createTableObject(
      "Net Income Ratio",
      "netIncomeRatio",
      lastFiveYearsDataDescending,
      yearArray
    );

    const eps = createTableObject(
      "EPS",
      "eps",
      lastFiveYearsDataDescending,
      yearArray
    );

    const epsDiluted = createTableObject(
      "EPS Diluted",
      "epsdiluted",
      lastFiveYearsDataDescending,
      yearArray
    );

    const weightedAverageShsOut = createTableObject(
      "Weighted Average SHS Out",
      "weightedAverageShsOut",
      lastFiveYearsDataDescending,
      yearArray
    );

    const weightedAverageShsOutDil = createTableObject(
      "Weighted Average SHS Out Dil",
      "weightedAverageShsOutDil",
      lastFiveYearsDataDescending,
      yearArray
    );

    const tempA = [
      revTable,
      costOfRevenueArray,
      grossProfit,
      grossProfitRatio,
      researchAndDevelopmentExpenses,
      generalAndAdministrativeExpenses,
      sellingAndMarketingExpenses,
      sellingGeneralAndAdministrativeExpenses,
      otherExpenses,
      operatingExpenses,
      costAndExpenses,
      interestIncome,
      interestExpense,
      depreciationAndAmortization,
      ebitda,
      ebitdaRatio,
      operatingIncome,
      operatingIncomeRatio,
      totalOtherIncomeExpensesNet,
      incomeBeforeTax,
      incomeBeforeTaxRatio,
      incomeTaxExpense,
      netIncome,
      netIncomeRatio,
      eps,
      epsDiluted,
      weightedAverageShsOut,
      weightedAverageShsOutDil,
    ];
    setJoinedDataArray(tempA);

    getAndSetFinalColumnsArray();
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

  const columns = useMemo(() => finalColumnsArray, [finalColumnsArray]);

  return (
    <div className="income table">
      <div className="table-title">Income Table</div>
      {joinedDataArray.length >= 1 ? (
        <Table columns={columns} data={joinedDataArray} />
      ) : null}
    </div>
  );
}

export default IncomeTable;
