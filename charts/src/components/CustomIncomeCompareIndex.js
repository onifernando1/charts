import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/overview.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  indexNumberConverter,
} from "../functions/dataExtraction";
import LineGraphAny from "./LineGraphAny";
import AreaChartAny from "./AreaChartAny";

function CustomIncomeCompareIndex(props) {
  const dataOptions = [
    "Revenue",
    "Gross Profit",
    "Net Income",
    "Ebitda",
    "Gross Profit Ratio",
    "Operating Income",
    "Operating Expenses",
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(dataOptions.length).fill(false)
  );
  const [dateArrayA, setDateArrayA] = useState("");
  const [revenueArrayA, setRevenueArrayA] = useState("");
  const [ebitdaArrayA, setEbitdaArrayA] = useState("");
  const [grossProfitArrayA, setGrossProfitArrayA] = useState("");
  const [netIncomeArrayA, setNetIncomeArrayA] = useState("");
  const [grossProfitRatioArrayA, setGrossProfitRatioArrayA] = useState("");
  const [operatingIncomeArrayA, setOperatingIncomeArrayA] = useState("");
  const [operatingExpensesArrayA, setOperatingExpensesArrayA] = useState("");
  const [dateArrayB, setDateArrayB] = useState("");
  const [revenueArrayB, setRevenueArrayB] = useState("");
  const [ebitdaArrayB, setEbitdaArrayB] = useState("");
  const [grossProfitArrayB, setGrossProfitArrayB] = useState("");
  const [netIncomeArrayB, setNetIncomeArrayB] = useState("");
  const [grossProfitRatioArrayB, setGrossProfitRatioArrayB] = useState("");
  const [operatingIncomeArrayB, setOperatingIncomeArrayB] = useState("");
  const [operatingExpensesArrayB, setOperatingExpensesArrayB] = useState("");
  const [showIndex, setShowIndex] = useState(false);
  const [pageLoad, setPageLoad] = useState(true);
  const [allDatasets, setAllDatasets] = useState("");
  const [optionSelected, setOptionSelected] = useState("Revenue");
  const requestDataA = props.data;
  const nameA = props.nameA;
  const nameB = props.nameB;
  const requestDataB = props.dataCompanyB;

  useEffect(() => {
    getDateAndRevenueArraysFromOriginalRequest();
  }, [props.data]);

  useEffect(() => {
    setPageLoad(true);
  }, [props.data]);

  useEffect(() => {
    createDatasets();
  }, [optionSelected]);

  useEffect(() => {
    if (pageLoad && revenueArrayA.length > 1) {
      setAllDatasets([
        { label: dataOptions[0] + " " + nameA, data: revenueArrayA },
        { label: dataOptions[0] + " " + nameB, data: revenueArrayB },
      ]);
      setPageLoad(false);
    }
  }, [revenueArrayA, pageLoad]);

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const lastTenYearsDataA = getXYearsDataFromRequest(requestDataA, 10);
    setDateArrayA(getPropertyArrayFromData(lastTenYearsDataA, "date"));
    setRevenueArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "revenue")
      )
    );
    setGrossProfitArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "grossProfit")
      )
    );
    setNetIncomeArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "netIncome")
      )
    );
    setEbitdaArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "ebitda")
      )
    );
    setGrossProfitRatioArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "grossProfitRatio")
      )
    );
    setOperatingIncomeArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "operatingIncome")
      )
    );
    setOperatingExpensesArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "operatingExpenses")
      )
    );
    const lastTenYearsDataB = getXYearsDataFromRequest(requestDataB, 10);
    setRevenueArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "revenue")
      )
    );
    setGrossProfitArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "grossProfit")
      )
    );
    setNetIncomeArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "netIncome")
      )
    );
    setEbitdaArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "ebitda")
      )
    );
    setGrossProfitRatioArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "grossProfitRatio")
      )
    );
    setOperatingIncomeArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "operatingIncome")
      )
    );
    setOperatingExpensesArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "operatingExpenses")
      )
    );
  };

  const handleChange = (e) => {
    setOptionSelected(e.target.value);
  };

  const createDatasets = () => {
    const labelToArrayObj = linkLabelsToArray();
    let allDatasetsArray = [];

    let obj = {
      label: optionSelected + " " + nameA,
      data: labelToArrayObj[optionSelected][0],
    };

    let objB = {
      label: optionSelected + " " + nameB,
      data: labelToArrayObj[optionSelected][1],
    };

    allDatasetsArray.push(obj);
    allDatasetsArray.push(objB);

    setAllDatasets(allDatasetsArray);
  };

  const linkLabelsToArray = () => {
    return {
      Revenue: [revenueArrayA, revenueArrayB],
      "Gross Profit": [grossProfitArrayA, grossProfitArrayB],
      "Net Income": [netIncomeArrayA, netIncomeArrayB],
      Ebitda: [ebitdaArrayA, ebitdaArrayB],
      "Gross Profit Ratio": [grossProfitRatioArrayA, grossProfitRatioArrayB],
      "Operating Income": [operatingIncomeArrayA, operatingExpensesArrayB],
      "Operating Expenses": [operatingExpensesArrayA, operatingExpensesArrayB],
    };
  };

  return (
    <>
      <div className="custom-income-graph-container default-container">
        <div className="graph-title">Compare</div>
        {/* <button onClick={toggleIndex}>Toggle Index</button> */}

        <div className="custom-income-form">
          {dataOptions.map((param, index) => {
            return (
              <>
                <li key={index}>
                  <div className="options-list-item">
                    <input
                      type="radio"
                      id={`custom-radio-compare-${index}`}
                      name={param}
                      value={param}
                      checked={optionSelected === param}
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor={`custom-radio-compare-${index}`}>
                      {param}
                    </label>
                  </div>
                </li>
              </>
            );
          })}
        </div>

        <div className="area-chart-container">
          <AreaChartAny datasets={allDatasets} x={dateArrayA} />
        </div>
      </div>
    </>
  );
}

export default CustomIncomeCompareIndex;
