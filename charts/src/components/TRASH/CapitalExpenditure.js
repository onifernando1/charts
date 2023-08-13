import React, { useState } from "react";
import LineGraph from "./LineGraph";
import { useEffect } from "react";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
} from "../../functions/dataExtraction";

function CapitalExpenditure(props) {
  const [dateArray, setDateArray] = useState("");
  const [capitalExpenditureArray, setCapitalExpenditureArray] = useState("");
  const requestData = props.data;

  useEffect(() => {
    getDateAndCapitalExpenditureFromRequest();
  }, [props.data]);

  const getDateAndCapitalExpenditureFromRequest = () => {
    const lastTenYearsData = getXYearsDataFromRequest(requestData, 10);
    setDateArray(getPropertyArrayFromData(lastTenYearsData, "date"));
    setCapitalExpenditureArray(
      getPropertyArrayFromData(lastTenYearsData, "capitalExpenditure")
    );
  };

  return (
    <div className="default-container">
      <div className="capital-expenditure-title">Capital Expenditure</div>
      <LineGraph
        x={dateArray}
        dataset1={{ data: capitalExpenditureArray, label: "$" }}
      />
    </div>
  );
}

export default CapitalExpenditure;
