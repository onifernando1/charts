import React, { useEffect } from "react";
import Overview from "./Overview";
import { useState } from "react";
import CashFlowOverview from "./CashFlowOverview";
import BalanceOverview from "./BalanceOverview";
import {
  amazonRequestData,
  amazonBalanceData,
  amazonCashFlowRequestData,
  MSFTBalanceData,
  MSFTRequestData,
  MSFTCashFlowData,
} from "../sampleData/requestData";

function OverviewManager(props) {
  const dataViewsArray = ["income", "cashFlow", "balance"];
  const [currentDataView, setCurrentDataView] = useState(dataViewsArray[0]);
  const [incomeData, setIncomeData] = useState(amazonRequestData);
  const [balanceData, setBalanceData] = useState(amazonBalanceData);
  const [cashFlowData, setCashFlowData] = useState(amazonCashFlowRequestData);
  const name = props.name;

  console.log("below");
  return (
    <>
      <div className="overview-title-container">
        <div
          style={{ color: "white" }}
          onClick={() => {
            setIncomeData(MSFTRequestData);
            setBalanceData(MSFTBalanceData);
            setCashFlowData(MSFTCashFlowData);
          }}
        >
          MSFT
        </div>
        <div
          style={{ color: "white" }}
          onClick={() => {
            setIncomeData(amazonRequestData);
            setBalanceData(amazonBalanceData);
            setCashFlowData(amazonCashFlowRequestData);
          }}
        >
          Amazon
        </div>
        <div>
          <div className="overview-title">{name}</div>
        </div>
        <div className="data-view-container">
          <div>
            <div
              onClick={() => {
                setCurrentDataView(dataViewsArray[0]);
              }}
              className="data-view-title"
            >
              Income
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                setCurrentDataView(dataViewsArray[1]);
              }}
              className="data-view-title"
            >
              Cash Flow
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                setCurrentDataView(dataViewsArray[2]);
              }}
              className="data-view-title"
            >
              Balance
            </div>
          </div>
        </div>
      </div>
      {currentDataView == "income" ? <Overview data={incomeData} /> : null}
      {currentDataView == "cashFlow" ? (
        <CashFlowOverview data={cashFlowData} />
      ) : null}
      {currentDataView == "balance" ? (
        <BalanceOverview balanceData={balanceData} />
      ) : null}
    </>
  );
}

export default OverviewManager;
