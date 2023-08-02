import React from "react";
import Overview from "./Overview";
import { useState } from "react";
import { amazonRequestData } from "../sampleData/requestData";
import { MSFTRequestData } from "../sampleData/requestData";
import CashFlowOverview from "./CashFlowOverview";

function OverviewManager(props) {
  const dataViewsArray = ["income", "cashFlow", "balance"];
  const [currentRequestData, setCurrentRequestData] =
    useState(amazonRequestData);
  const [currentDataView, setCurrentDataView] = useState(dataViewsArray[0]);
  return (
    <>
      <div
        onClick={() => {
          setCurrentRequestData(amazonRequestData);
          setCurrentDataView(dataViewsArray[0]);
        }}
      >
        Amazon Income
      </div>
      <div
        onClick={() => {
          setCurrentRequestData(amazonRequestData);
          setCurrentDataView(dataViewsArray[1]);
        }}
      >
        Amazon Cash Flow
      </div>
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
          <div className="overview-currency">CURRENCY $</div>
        </div>
        <div>
          <div className="overview-watchlist">+ ADD TO WATCHLIST</div>
        </div>
      </div>
      {currentDataView == "income" ? (
        <Overview data={currentRequestData} />
      ) : null}
      {currentDataView == "cashFlow" ? <CashFlowOverview /> : null}
    </>
  );
}

export default OverviewManager;
