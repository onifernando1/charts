import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/overview.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  indexNumberConverter,
} from "../functions/dataExtraction";
import LineGraphAny from "./LineGraphAny";

function IncomeCompareGraph1(props) {
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
  const [revenueCompanyAArray, setRevenueCompantAArray] = useState("");
  const [revenueCompanyBArray, setRevenueCompanyBArray] = useState("");
  const [checkedState, setCheckedState] = useState(
    new Array(dataOptions.length).fill(false)
  );

  const [dateArray, setDateArray] = useState("");

  //MixedArray
  const [revenueArray, setRevenueArray] = useState("");
  const [ebitdaArray, setEbitdaArray] = useState("");
  const [grossProfitArray, setGrossProfitArray] = useState("");
  const [netIncomeArray, setNetIncomeArray] = useState("");
  const [grossProfitRatioArray, setGrossProfitRatioArray] = useState("");
  const [operatingIncomeArray, setOperatingIncomeArray] = useState("");
  const [operatingExpensesArray, setOperatingExpensesArray] = useState("");

  //Company A
  const [revenueArrayA, setRevenueArrayA] = useState("");
  const [ebitdaArrayA, setEbitdaArrayA] = useState("");
  const [grossProfitArrayA, setGrossProfitArrayA] = useState("");
  const [netIncomeArrayA, setNetIncomeArrayA] = useState("");
  const [grossProfitRatioArrayA, setGrossProfitRatioArrayA] = useState("");
  const [operatingIncomeArrayA, setOperatingIncomeArrayA] = useState("");
  const [operatingExpensesArrayA, setOperatingExpensesArrayA] = useState("");

  //Company B
  const [revenueArrayB, setRevenueArrayB] = useState("");
  const [ebitdaArrayB, setEbitdaArrayB] = useState("");
  const [grossProfitArrayB, setGrossProfitArrayB] = useState("");
  const [netIncomeArrayB, setNetIncomeArrayB] = useState("");
  const [grossProfitRatioArrayB, setGrossProfitRatioArrayB] = useState("");
  const [operatingIncomeArrayB, setOperatingIncomeArrayB] = useState("");
  const [operatingExpensesArrayB, setOperatingExpensesArrayB] = useState("");

  const requestDataA = props.data;
  const requestDataB = props.dataCompanyB;

  useEffect(() => {
    getIndexArraysFromOriginalRequest();
  }, [props.data]);

  useEffect(() => {
    createDatasets();
  }, [checkedState]);

  const getIndexArraysFromOriginalRequest = () => {
    const lastTenYearsDataA = getXYearsDataFromRequest(requestDataA, 10);
    setDateArray(getPropertyArrayFromData(lastTenYearsDataA, "date"));

    //Company A

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

    //Company B

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

    //Combined Array

    setRevenueArray([...revenueArrayA, ...revenueArrayB]);
    setGrossProfitArray([...grossProfitArrayA, ...grossProfitArrayB]);
    setNetIncomeArray([...netIncomeArrayA, ...netIncomeArrayB]);
    setEbitdaArray([...ebitdaArrayA, ...ebitdaArrayB]);
    setGrossProfitArray([...grossProfitArrayA, ...grossProfitArrayB]);
    setOperatingIncomeArray([
      ...operatingIncomeArrayA,
      ...operatingExpensesArrayB,
    ]);
    setOperatingExpensesArray([
      ...operatingExpensesArrayA,
      ...operatingExpensesArrayB,
    ]);
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

  return (
    <div
      className="income-compare default-container"
      style={{ marginTop: "20rem" }}
    >
      <div>Compare </div>
      <div className="custom-compare-form">
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
      {/* <div>
        <LineGraphAny
          datasets={[
            { label: "Revenue Amazon", data: revenueCompanyAArray },
            { label: "Revenue MSFT", data: revenueCompanyBArray },
          ]}
          x={dateArray}
        />
      </div> */}
    </div>
  );
}

export default IncomeCompareGraph1;
