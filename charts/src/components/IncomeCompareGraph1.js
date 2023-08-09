import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/overview.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  indexNumberConverter,
} from "../functions/dataExtraction";
import LineGraph3 from "./LineGraph3";
import LineGraphAny from "./LineGraphAny";
import "../assets/styles/income-compare.csss";

function IncomeCompareGraph1(props) {
  const [currentRequestData, setCurrentRequestData] = useState([]);
  const [revenueCompanyAArray, setRevenueCompantAArray] = useState("");
  const [revenueCompanyBArray, setRevenueCompanyBArray] = useState("");

  const [dateArray, setDateArray] = useState("");

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

  const dataOptions = [
    "Revenue",
    "Gross Profit",
    "Net Income",
    "Ebitda",
    "Gross Profit Ratio",
    "Operating Income",
    "Operating Expenses",
  ];

  useEffect(() => {
    getDateAndRevenueArraysFromOriginalRequest();
  }, [props.data]);

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const lastTenYearsData = getXYearsDataFromRequest(requestDataA, 10);
    const lastTenYearBData = getXYearsDataFromRequest(requestDataB, 10);
    setDateArray(getPropertyArrayFromData(lastTenYearsData, "date"));
    setRevenueCompantAArray(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearsData, "revenue")
      )
    );
    setRevenueCompanyBArray(
      indexNumberConverter(
        getPropertyArrayFromData(lastTenYearBData, "revenue")
      )
    );
  };

  return (
    <div className="income-compare default-container">
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
      <div>
        <LineGraphAny
          datasets={[
            { label: "Revenue Amazon", data: revenueCompanyAArray },
            { label: "Revenue MSFT", data: revenueCompanyBArray },
          ]}
          x={dateArray}
        />
      </div>
    </div>
  );
}

export default IncomeCompareGraph1;
