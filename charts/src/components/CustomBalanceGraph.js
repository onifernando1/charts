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

  const [allDatasets, setAllDatasets] = useState("");

  const requestData = props.data;

  useEffect(() => {
    getDateAndRevenueArraysFromOriginalRequest();
  }, [props.data]);

  useEffect(() => {
    createDatasets();
  }, [checkedState]);

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

  const linkLabelsToIndexArray = () => {
    return {
      "Cash And Cash Equivalents": indexNumberConverter(cashArray),
      "Total Current Assets": indexNumberConverter(assetsArray),
      "Total Current Liabilities": indexNumberConverter(liabilitiesArray),
      "Long Term Debt": indexNumberConverter(longTermDebtArray),
      "Net Debt": indexNumberConverter(netDebtArray),
      "Retained Earnings": indexNumberConverter(retainedEarningsArray),
      "Total Stockholders' Equity": indexNumberConverter(
        stockholderEquityArray
      ),
    };
  };

  const toggleIndex = () => {
    if (showIndex == false) {
      console.log("false");
      createIndexDatasets(allDatasets);
      setShowIndex(true);
    } else if (showIndex == true) {
      console.log("true");
      createNormalDatasets();
      setShowIndex(false);
    }
  };

  const createIndexDatasets = () => {
    const labelToArrayObj = linkLabelsToIndexArray();
    let allDatasetsArray = [];
    let allIndexDatasets = [];

    checkedState.forEach((item, index) => {
      if (item == true) {
        // if it is checked
        let obj = {
          label: dataOptions[index],
          data: labelToArrayObj[dataOptions[index]],
        };
        allIndexDatasets.push(obj);
      }
    });

    return allIndexDatasets;
  };

  const createOneTrue = () => {
    checkedState[0] = true;
  };

  const createNormalDatasets = () => {};

  return (
    <>
      <div className="custom-income-graph-container default-container">
        <div className="graph-title">Balance</div>
        {/* <button onClick={toggleIndex}>Toggle Index</button> */}

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

        {!showIndex ? (
          <div className="area-chart-container">
            <AreaChartAny datasets={allDatasets} x={dateArray} />
          </div>
        ) : (
          <div className="area-chart-container">
            <AreaChartAny datasets={createIndexDatasets()} x={dateArray} />
          </div>
        )}
      </div>
    </>
  );
}

export default CustomBalanceGraph;
