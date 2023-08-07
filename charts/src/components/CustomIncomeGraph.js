import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/overview.css";
import "../assets/styles/custom-income-graph.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  indexNumberConverter,
} from "../functions/dataExtraction";
import LineGraphAny from "./LineGraphAny";

function CustomIncomeGraph(props) {
  const dataOptions = [
    "Revenue",
    "Gross Profit",
    "Net Income",
    "Ebitda",
    "Gross Profit Ratio",
    "Operating Income",
    "Operating Expenses",
  ];

  const [currentRequestData, setCurrentRequestData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const [checkedState, setCheckedState] = useState(
    new Array(dataOptions.length).fill(false)
  );
  const [dateArray, setDateArray] = useState("");
  const [revenueArray, setRevenueArray] = useState("");
  const [ebitdaArray, setEbitdaArray] = useState("");
  const [grossProfitArray, setGrossProfitArray] = useState("");
  const [netIncomeArray, setNetIncomeArray] = useState("");
  const [grossProfitRatioArray, setGrossProfitRatioArray] = useState("");
  const [operatingIncomeArray, setOperatingIncomeArray] = useState("");
  const [operatingExpensesArray, setOperatingExpensesArray] = useState("");
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
    setRevenueArray(getPropertyArrayFromData(lastTenYearsData, "revenue"));
    setGrossProfitArray(
      getPropertyArrayFromData(lastTenYearsData, "grossProfit")
    );
    setNetIncomeArray(getPropertyArrayFromData(lastTenYearsData, "netIncome"));
    setEbitdaArray(getPropertyArrayFromData(lastTenYearsData, "ebitda"));
    setGrossProfitRatioArray(
      getPropertyArrayFromData(lastTenYearsData, "grossProfitRatio")
    );
    setOperatingIncomeArray(
      getPropertyArrayFromData(lastTenYearsData, "operatingIncome")
    );
    setOperatingExpensesArray(
      getPropertyArrayFromData(lastTenYearsData, "operatingExpenses")
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
      Revenue: revenueArray,
      "Gross Profit": grossProfitArray,
      "Net Income": netIncomeArray,
      Ebitda: ebitdaArray,
      "Gross Profit Ratio": grossProfitRatioArray,
      "Operating Income": operatingIncomeArray,
      "Operating Expenses": operatingExpensesArray,
    };
  };

  const linkLabelsToIndexArray = () => {
    return {
      Revenue: indexNumberConverter(revenueArray),
      "Gross Profit": indexNumberConverter(grossProfitArray),
      "Net Income": indexNumberConverter(netIncomeArray),
      Ebitda: indexNumberConverter(ebitdaArray),
      "Gross Profit Ratio": indexNumberConverter(grossProfitRatioArray),
      "Operating Income": indexNumberConverter(operatingIncomeArray),
      "Operating Expenses": indexNumberConverter(operatingExpensesArray),
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

  const createNormalDatasets = () => {};

  return (
    <>
      <div className="custom-income-graph-container default-container">
        <div className="revenue-over-time-title"> </div>
        <button onClick={toggleIndex}>Toggle Index</button>

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
      </div>
      {!showIndex ? (
        <div className="line-graph-container">
          <LineGraphAny datasets={allDatasets} x={dateArray} />
        </div>
      ) : (
        <div className="line-graph-container">
          <LineGraphAny datasets={createIndexDatasets()} x={dateArray} />
        </div>
      )}
    </>
  );
}

export default CustomIncomeGraph;
