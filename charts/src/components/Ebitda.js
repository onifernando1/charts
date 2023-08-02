import React, { useState } from "react";
import LineGraph from "./LineGraph";
import "../assets/styles/ebitda.css";
import { useEffect } from "react";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  getDateAndPropertyArrayFromData,
} from "../functions/dataExtraction";

function Ebitda(props) {
  const [dateArray, setDateArray] = useState("");
  const [ebitdaArray, setEbitdaArray] = useState("");
  const requestData = props.data;

  useEffect(() => {
    getDateAndEbitdaArraysFromOriginalRequest();
  }, [props.data]);

  const getDateAndEbitdaArraysFromOriginalRequest = () => {
    const lastTenYearsData = getXYearsDataFromRequest(requestData, 10);
    setDateArray(getPropertyArrayFromData(lastTenYearsData, "date"));
    setEbitdaArray(getPropertyArrayFromData(lastTenYearsData, "ebitda"));
  };

  return (
    <div className="ebitda-container">
      <div className="ebitda-title">Ebitda</div>
      <LineGraph x={dateArray} dataset1={{ data: ebitdaArray, label: "$" }} />
    </div>
  );
}

export default Ebitda;
