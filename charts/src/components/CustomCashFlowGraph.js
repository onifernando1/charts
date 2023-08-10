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

function CustomCashFlowGraph(props) {
  const dataOptions = [
    "Operating Cash Flow",
    "Free Cash Flow",
    "Common Stock Issued",
    "Deferred Income Tax",
    "Accounts Receivables",
    "Accounts Payables",
    "Change in Working Capital",
  ];

  const [currentRequestData, setCurrentRequestData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const [checkedState, setCheckedState] = useState(
    new Array(dataOptions.length).fill(false)
  );
  const [dateArray, setDateArray] = useState("");
  const [operatingArray, setOperatingArray] = useState("");
  const [freeArray, setFreeArray] = useState("");
  const [stockArray, setStockArray] = useState("");
  const [deferredIncomeArray, setDeferredIncomeArray] = useState("");
  const [receivablesArray, setReceivablesArray] = useState("");
  const [payablesArray, setPayablesArray] = useState("");
  const [capitalArray, setCapitalArray] = useState("");
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
    setOperatingArray(
      getPropertyArrayFromData(lastTenYearsData, "operatingCashFlow")
    );
    setFreeArray(getPropertyArrayFromData(lastTenYearsData, "freeCashFlow"));
    setStockArray(
      getPropertyArrayFromData(lastTenYearsData, "commonStockIssued")
    );
    setDeferredIncomeArray(
      getPropertyArrayFromData(lastTenYearsData, "deferredIncomeTax")
    );
    setReceivablesArray(
      getPropertyArrayFromData(lastTenYearsData, "accountsReceivables")
    );
    setPayablesArray(
      getPropertyArrayFromData(lastTenYearsData, "accountsPayables")
    );
    setCapitalArray(
      getPropertyArrayFromData(lastTenYearsData, "changeInWorkingCapital")
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
      "Operating Cash Flow": operatingArray,
      "Free Cash Flow": freeArray,
      "Common Stock Issued": stockArray,
      "Deferred Income Tax": deferredIncomeArray,
      "Accounts Receivables": receivablesArray,
      "Accounts Payables": payablesArray,
      "Change in Working Capital": capitalArray,
    };
  };

  const linkLabelsToIndexArray = () => {
    return {
      "Operating Cash Flow": indexNumberConverter(operatingArray),
      "Free Cash Flow": indexNumberConverter(freeArray),
      "Common Stock Issued": indexNumberConverter(stockArray),
      "Deferred Income Tax": indexNumberConverter(deferredIncomeArray),
      "Accounts Receivables": indexNumberConverter(receivablesArray),
      "Accounts Payables": indexNumberConverter(payablesArray),
      "Change in Working Capital": indexNumberConverter(capitalArray),
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
        <div className="graph-title">Cash Flow</div>
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

export default CustomCashFlowGraph;
