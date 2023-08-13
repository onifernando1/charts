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

function CustomBalanceCompareIndex(props) {
  const dataOptions = [
    "Cash And Cash Equivalents",
    "Total Current Assets",
    "Total Current Liabilities",
    "Long Term Debt",
    "Net Debt",
    "Retained Earnings",
    "Total Stockholders' Equity",
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(dataOptions.length).fill(false)
  );
  const [dateArrayA, setDateArrayA] = useState("");
  const [cashArrayA, setCashArrayA] = useState("");
  const [assetsArrayA, setAssetsArrayA] = useState("");
  const [liabilitiesArrayA, setLiabilitiesArrayA] = useState("");
  const [longTermDebtArrayA, setLongTermDebtArrayA] = useState("");
  const [netDebtArrayA, setNetDebtArrayA] = useState("");
  const [retainedEarningsArrayA, setRetainedEarningsArrayA] = useState("");
  const [stockholderEquityArrayA, setStockholderEquityArrayA] = useState("");
  //
  const [cashArrayB, setCashArrayB] = useState("");
  const [assetsArrayB, setAssetsArrayB] = useState("");
  const [liabilitiesArrayB, setLiabilitiesArrayB] = useState("");
  const [longTermDebtArrayB, setLongTermDebtArrayB] = useState("");
  const [netDebtArrayB, setNetDebtArrayB] = useState("");
  const [retainedEarningsArrayB, setRetainedEarningsArrayB] = useState("");
  const [stockholderEquityArrayB, setStockholderEquityArrayB] = useState("");
  const [showIndex, setShowIndex] = useState(false);
  const [pageLoad, setPageLoad] = useState(true);
  const [allDatasets, setAllDatasets] = useState("");
  const [optionSelected, setOptionSelected] = useState(
    "Cash And Cash Equivalents"
  );
  const requestDataA = props.data;
  const nameA = props.nameA;
  const nameB = props.nameB;
  const requestDataB = props.dataB;

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
    if (pageLoad && cashArrayA.length > 1) {
      setAllDatasets([
        { label: dataOptions[0] + " " + nameA, data: cashArrayA },
        { label: dataOptions[0] + " " + nameB, data: cashArrayB },
      ]);
      setPageLoad(false);
    }
  }, [cashArrayA, pageLoad]);

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const lastTenYearsDataA = getXYearsDataFromRequest(requestDataA, 10);
    setDateArrayA(getPropertyArrayFromData(lastTenYearsDataA, "date"));
    setCashArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "cashAndCashEquivalents")
      )
    );
    setLiabilitiesArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "totalCurrentLiabilities")
      )
    );
    setLongTermDebtArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "longTermDebt")
      )
    );
    setAssetsArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "totalCurrentAssets")
      )
    );
    setNetDebtArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "netDebt")
      )
    );
    setRetainedEarningsArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "retainedEarnings")
      )
    );
    setStockholderEquityArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "totalStockholdersEquity")
      )
    );
    const lastTenYearsDataB = getXYearsDataFromRequest(requestDataB, 10);
    setCashArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "cashAndCashEquivalents")
      )
    );
    setLiabilitiesArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "totalCurrentLiabilities")
      )
    );
    setLongTermDebtArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "longTermDebt")
      )
    );
    setAssetsArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "totalCurrentAssets")
      )
    );
    setNetDebtArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "netDebt")
      )
    );
    setRetainedEarningsArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "retainedEarnings")
      )
    );
    setStockholderEquityArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "totalStockholdersEquity")
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
      "Cash And Cash Equivalents": [cashArrayA, cashArrayB],
      "Total Current Assets": [assetsArrayA, assetsArrayB],
      "Total Current Liabilities": [liabilitiesArrayA, liabilitiesArrayB],
      "Long Term Debt": [longTermDebtArrayA, longTermDebtArrayB],
      "Net Debt": [netDebtArrayA, netDebtArrayB],
      "Retained Earnings": [retainedEarningsArrayA, retainedEarningsArrayB],
      "Total Stockholders' Equity": [
        stockholderEquityArrayA,
        stockholderEquityArrayB,
      ],
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

export default CustomBalanceCompareIndex;
