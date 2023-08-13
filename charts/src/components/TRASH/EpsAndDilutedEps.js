import React from "react";
import BarChart2 from "../BarChart2";
import { useState, useEffect } from "react";
import { requestData } from "../../sampleData/requestData";
import "../assets/styles/epsdiluted.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  getDateAndPropertyArrayFromData,
} from "../../functions/dataExtraction";

function EpsAndDilutedEps(props) {
  const [dateArray, setDateArray] = useState("");
  const [epsArray, setEpsArray] = useState("");
  const [dilutedEpsArray, setDilutedEpsArray] = useState("");
  const requestData = props.data;

  useEffect(() => {
    getDateEpsDilutedEpsArraysFromOriginalRequest();
  }, [props.data]);

  const getDateEpsDilutedEpsArraysFromOriginalRequest = () => {
    const lastFiveYearsData = getXYearsDataFromRequest(requestData, 5);
    setDateArray(getPropertyArrayFromData(lastFiveYearsData, "date"));
    setEpsArray(getPropertyArrayFromData(lastFiveYearsData, "eps"));
    setDilutedEpsArray(
      getPropertyArrayFromData(lastFiveYearsData, "epsdiluted")
    );
  };

  return (
    <div className="eps-diluted-container">
      <div className="eps-diluted-title">EPS/Diluted EPS</div>
      <BarChart2
        x={dateArray}
        dataset1={{ data: epsArray, label: "EPS" }}
        dataset2={{ data: dilutedEpsArray, label: "Diluted EPS" }}
      />
    </div>
  );
}

export default EpsAndDilutedEps;
