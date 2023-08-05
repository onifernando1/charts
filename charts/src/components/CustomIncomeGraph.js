import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/overview.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  getDateAndPropertyArrayFromData,
} from "../functions/dataExtraction";
import LineGraphAny from "./LineGraphAny";

function CustomIncomeGraph(props) {
  const dataOptions = ["Revenue", "Gross Profit", "Net Income"];

  const [currentRequestData, setCurrentRequestData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const [checkedState, setCheckedState] = useState(
    new Array(dataOptions.length).fill(false)
  );
  const [dateArray, setDateArray] = useState("");
  const [revenueArray, setRevenueArray] = useState("");
  const [grossProfitArray, setGrossProfitArray] = useState("");
  const [netIncomeArray, setNetIncomeArray] = useState("");
  const [allDatasets, setAllDatasets] = useState("");

  const requestData = props.data;

  useEffect(() => {
    getDateAndRevenueArraysFromOriginalRequest();
  }, [props.data]);

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const lastTenYearsData = getXYearsDataFromRequest(requestData, 10);
    setDateArray(getPropertyArrayFromData(lastTenYearsData, "date"));
    setRevenueArray(getPropertyArrayFromData(lastTenYearsData, "revenue"));
    setGrossProfitArray(
      getPropertyArrayFromData(lastTenYearsData, "grossProfit")
    );
    setNetIncomeArray(getPropertyArrayFromData(lastTenYearsData, "netIncome"));
    createDatasets();
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
    const allDatasets = [
      { label: "Revenue", data: labelToArrayObj["Revenue"] },
      { label: "Gross Profit", data: labelToArrayObj["Gross Profit"] },
      { label: "Net Income", data: labelToArrayObj["Net Income"] },
    ];
    setAllDatasets(allDatasets);
    console.log(allDatasets);
  };

  const linkLabelsToArray = () => {
    return {
      Revenue: revenueArray,
      "Gross Profit": grossProfitArray,
      "Net Income": netIncomeArray,
    };
  };

  return (
    <>
      <div className="default-container">
        <div className="revnue-over-time-title">Custom </div>
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
                    <div>{param}</div>
                  </div>
                </li>
              </>
            );
          })}
        </div>
      </div>
      <div>
        <LineGraphAny datasets={allDatasets} x={dateArray} />
      </div>
    </>
  );
}

export default CustomIncomeGraph;
