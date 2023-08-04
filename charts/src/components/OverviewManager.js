import React from "react";
import Overview from "./Overview";
import { useState } from "react";
import { amazonRequestData } from "../sampleData/requestData";
import { MSFTRequestData } from "../sampleData/requestData";
import CashFlowOverview from "./CashFlowOverview";
import BalanceOverview from "./BalanceOverview";

function OverviewManager(props) {
  const dataViewsArray = ["income", "cashFlow", "balance"];
  const [currentRequestData, setCurrentRequestData] =
    useState(amazonRequestData);
  const [currentDataView, setCurrentDataView] = useState(dataViewsArray[0]);
  return (
    <>
      <div
        onClick={() => {
          setCurrentRequestData(MSFTRequestData);
          setCurrentDataView(dataViewsArray[0]);
        }}
      >
        MSFT Income
      </div>
      <div className="overview-title-container">
        <div>
          <div className="overview-title">{currentRequestData[0].symbol}</div>
        </div>
        <div>
          <div
            onClick={() => {
              setCurrentRequestData(amazonRequestData);
              setCurrentDataView(dataViewsArray[0]);
            }}
            className="data-view-title"
          >
            Amazon Income
          </div>
        </div>
        <div>
          <div
            onClick={() => {
              setCurrentRequestData(amazonRequestData);
              setCurrentDataView(dataViewsArray[1]);
            }}
            className="data-view-title"
          >
            Amazon Cash Flow
          </div>
        </div>
        <div>
          <div
            onClick={() => {
              setCurrentRequestData(amazonRequestData);
              setCurrentDataView(dataViewsArray[2]);
            }}
            className="data-view-title"
          >
            Amazon Balance
          </div>
        </div>
      </div>
      {currentDataView == "income" ? (
        <Overview data={currentRequestData} />
      ) : null}
      {currentDataView == "cashFlow" ? <CashFlowOverview /> : null}
      {currentDataView == "balance" ? <BalanceOverview /> : null}
    </>
  );
}

export default OverviewManager;
