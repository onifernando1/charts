import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/overview.css";
import "../assets/styles/custom-income-graph.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  indexNumberConverter,
} from "../functions/dataExtraction";
import AreaChartAny from "./AreaChartAny";

function CustomBalanceGraph(props) {
  const dataOptions = [
    "Cash And Cash Equivalents",
    "Total Current Assets",
    "Total Current Liabilities",
    "Long Term Debt",
    "Net Debt",
    "Retained Earnings",
    "Total Stockholders' Equity",
  ];

  const [currentRequestData, setCurrentRequestData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const arrayWithOneTrue = () => {
    let array = new Array(dataOptions.length).fill(false);
    array[0] = true;
    return array;
  };

  const [checkedState, setCheckedState] = useState(
    new Array(dataOptions.length).fill(false)
  );
  const [dateArray, setDateArray] = useState("");
  const [cashArray, setCashArray] = useState("");
  const [assetsArray, setAssetsArray] = useState("");
  const [liabilitiesArray, setLiabilitiesArray] = useState("");
  const [longTermDebtArray, setLongTermDebtArray] = useState("");
  const [netDebtArray, setNetDebtArray] = useState("");
  const [retainedEarningsArray, setRetainedEarningsArray] = useState("");
  const [stockholderEquityArray, setStockholderEquityArray] = useState("");
  const [showIndex, setShowIndex] = useState(false);
  const [firstRun, setFirstRun] = useState(true);
  const [pageLoad, setPageLoad] = useState(true);

  const [allDatasets, setAllDatasets] = useState("");

  const requestData = props.data;

  useEffect(() => {
    getDateAndRevenueArraysFromOriginalRequest();
  }, [props.data]);

  useEffect(() => {
    setPageLoad(true);
  }, [props.data]);

  useEffect(() => {
    createDatasets();
  }, [checkedState]);

  useEffect(() => {
    if (pageLoad && cashArray.length > 1) {
      createOneTrue();
      setAllDatasets([{ label: dataOptions[0], data: cashArray }]);
      setPageLoad(false);
    }
  }, [cashArray, pageLoad]);

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const lastTenYearsData = getXYearsDataFromRequest(requestData, 10);
    setDateArray(getPropertyArrayFromData(lastTenYearsData, "date"));
    setCashArray(
      getPropertyArrayFromData(lastTenYearsData, "cashAndCashEquivalents")
    );
    setAssetsArray(
      getPropertyArrayFromData(lastTenYearsData, "totalCurrentAssets")
    );
    setLiabilitiesArray(
      getPropertyArrayFromData(lastTenYearsData, "totalCurrentLiabilities")
    );
    setLongTermDebtArray(
      getPropertyArrayFromData(lastTenYearsData, "longTermDebt")
    );
    setNetDebtArray(getPropertyArrayFromData(lastTenYearsData, "netDebt"));
    setRetainedEarningsArray(
      getPropertyArrayFromData(lastTenYearsData, "retainedEarnings")
    );
    setStockholderEquityArray(
      getPropertyArrayFromData(lastTenYearsData, "totalStockholdersEquity")
    );
  };

  const handleChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => {
      if (index === position) {
        return !item;
      } else {
        return item;
      }
    });

    setCheckedState(updatedCheckedState);
  };

  const createDatasets = () => {
    const labelToArrayObj = linkLabelsToArray();
    let allDatasetsArray = [];

    checkedState.forEach((item, index) => {
      if (item == true) {
        // if it is checked
        let obj = {
          label: dataOptions[index],
          data: labelToArrayObj[dataOptions[index]],
        };
        allDatasetsArray.push(obj);
      }
    });

    setAllDatasets(allDatasetsArray);
  };

  const linkLabelsToArray = () => {
    return {
      "Cash And Cash Equivalents": cashArray,
      "Total Current Assets": assetsArray,
      "Total Current Liabilities": liabilitiesArray,
      "Long Term Debt": longTermDebtArray,
      "Net Debt": netDebtArray,
      "Retained Earnings": retainedEarningsArray,
      "Total Stockholders' Equity": stockholderEquityArray,
    };
  };

  const createOneTrue = () => {
    checkedState[0] = true;
  };

  return (
    <>
      <div className="custom-income-graph-container default-container">
        <div className="graph-title">Balance</div>

        <div className="custom-income-form">
          {dataOptions.map((param, index) => {
            return (
              <>
                <li key={index}>
                  <div className="options-list-item">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={param}
                      value={param}
                      checked={checkedState[index]}
                      onChange={() => handleChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{param}</label>
                  </div>
                </li>
              </>
            );
          })}
        </div>

        <div className="area-chart-container">
          <AreaChartAny datasets={allDatasets} x={dateArray} />
        </div>
      </div>
    </>
  );
}

export default CustomBalanceGraph;
