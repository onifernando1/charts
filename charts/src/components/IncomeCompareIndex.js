import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/overview.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  indexNumberConverter,
} from "../functions/dataExtraction";
import LineGraph3 from "./TRASH/LineGraph3";
import LineGraphAny from "./LineGraphAny";
import "../assets/styles/income-compare.css";
import AreaChartAny from "./AreaChartAny";

function IncomeCompareIndex(props) {
  const [currentRequestData, setCurrentRequestData] = useState([]);
  const [dateArray, setDateArray] = useState("");
  const [revenueCompanyAArray, setRevenueCompantAArray] = useState("");
  const [revenueCompanyBArray, setRevenueCompanyBArray] = useState("");

  const requestDataA = props.data;
  const requestDataB = props.dataCompanyB;

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
      <div>Income Compare Index</div>
      <div>
        <AreaChartAny
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

export default IncomeCompareIndex;
