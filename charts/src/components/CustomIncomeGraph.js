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
import AreaChartAny from "./AreaChartAny";

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
    if (pageLoad && revenueArray.length > 1) {
      createOneTrue();
      setAllDatasets([{ label: dataOptions[0], data: revenueArray }]);
      setPageLoad(false);
    }
  }, [revenueArray, pageLoad]);

  const createOneTrue = () => {
    checkedState[0] = true;
  };

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
      createIndexDatasets(allDatasets);
      setShowIndex(true);
    } else if (showIndex == true) {
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
        <div className="graph-title">Income</div>
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

export default CustomIncomeGraph;
