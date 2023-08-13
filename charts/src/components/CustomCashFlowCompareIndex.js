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

function CustomCashFlowCompareIndex(props) {
  const dataOptions = [
    "Operating Cash Flow",
    "Free Cash Flow",
    "Common Stock Issued",
    "Deferred Income Tax",
    "Accounts Receivables",
    "Accounts Payables",
    "Change in Working Capital",
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(dataOptions.length).fill(false)
  );
  const [dateArrayA, setDateArrayA] = useState("");
  const [operatingArrayA, setOperatingArrayA] = useState("");
  const [freeArrayA, setFreeArrayA] = useState("");
  const [stockArrayA, setStockArrayA] = useState("");
  const [deferredIncomeArrayA, setDeferredIncomeArrayA] = useState("");
  const [receivablesArrayA, setReceivablesArrayA] = useState("");
  const [payablesArrayA, setPayablesArrayA] = useState("");
  const [capitalArrayA, setCapitalArrayA] = useState("");
  //
  const [operatingArrayB, setOperatingArrayB] = useState("");
  const [freeArrayB, setFreeArrayB] = useState("");
  const [stockArrayB, setStockArrayB] = useState("");
  const [deferredIncomeArrayB, setDeferredIncomeArrayB] = useState("");
  const [receivablesArrayB, setReceivablesArrayB] = useState("");
  const [payablesArrayB, setPayablesArrayB] = useState("");
  const [capitalArrayB, setCapitalArrayB] = useState("");
  const [showIndex, setShowIndex] = useState(false);
  const [pageLoad, setPageLoad] = useState(true);
  const [allDatasets, setAllDatasets] = useState("");
  const [optionSelected, setOptionSelected] = useState("Operating Cash Flow");
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
    if (pageLoad && operatingArrayA.length > 1) {
      setAllDatasets([
        { label: dataOptions[0] + " " + nameA, data: operatingArrayA },
        { label: dataOptions[0] + " " + nameB, data: operatingArrayB },
      ]);
      setPageLoad(false);
    }
  }, [operatingArrayA, pageLoad]);

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const lastTenYearsDataA = getXYearsDataFromRequest(requestDataA, 10);
    setDateArrayA(getPropertyArrayFromData(lastTenYearsDataA, "date"));
    setOperatingArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "operatingCashFlow")
      )
    );
    setFreeArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "freeCashFlow")
      )
    );
    setStockArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "commonStockIssued")
      )
    );
    setDeferredIncomeArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "deferredIncomeTax")
      )
    );
    setReceivablesArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "accountsReceivables")
      )
    );
    setPayablesArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "accountsPayables")
      )
    );
    setCapitalArrayA(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataA, "changeInWorkingCapital")
      )
    );
    const lastTenYearsDataB = getXYearsDataFromRequest(requestDataB, 10);
    setOperatingArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "operatingCashFlow")
      )
    );
    setFreeArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "freeCashFlow")
      )
    );
    setStockArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "commonStockIssued")
      )
    );
    setDeferredIncomeArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "deferredIncomeTax")
      )
    );
    setReceivablesArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "accountsReceivables")
      )
    );
    setPayablesArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "accountsPayables")
      )
    );
    setCapitalArrayB(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsDataB, "changeInWorkingCapital")
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
      "Operating Cash Flow": [operatingArrayA, operatingArrayB],
      "Free Cash Flow": [freeArrayA, freeArrayB],
      "Common Stock Issued": [stockArrayA, stockArrayB],
      "Deferred Income Tax": [deferredIncomeArrayA, deferredIncomeArrayB],
      "Accounts Receivables": [receivablesArrayA, receivablesArrayB],
      "Accounts Payables": [payablesArrayA, payablesArrayB],
      "Change in Working Capital": [capitalArrayA, capitalArrayB],
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

export default CustomCashFlowCompareIndex;
