import React from "react";
import Overview from "./Overview";
import { useState } from "react";
import {
  amazonRequestData,
  amazonBalanceData,
  amazonCashFlowRequestData,
} from "../sampleData/requestData";
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
      {/* <div
        onClick={() => {
          setCurrentRequestData(MSFTRequestData);
          setCurrentDataView(dataViewsArray[0]);
        }}
      >
        MSFT Income
      </div> */}
      <div className="overview-title-container">
        <div>
          <div className="overview-title">{currentRequestData[0].symbol}</div>
        </div>
        <div className="data-view-container">
          <div>
            <div
              onClick={() => {
                setCurrentRequestData(amazonRequestData);
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
                setCurrentRequestData(amazonRequestData);
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
                setCurrentRequestData(amazonRequestData);
                setCurrentDataView(dataViewsArray[2]);
              }}
              className="data-view-title"
            >
              Balance
            </div>
          </div>
        </div>
      </div>
      {currentDataView == "income" ? (
        <Overview
          data={currentRequestData}
          dataCompanyB={MSFTRequestData}
          balanceData={amazonBalanceData}
          cashFlowData={amazonCashFlowRequestData}
        />
      ) : null}
      {currentDataView == "cashFlow" ? (
        <CashFlowOverview data={amazonCashFlowRequestData} />
      ) : null}
      {currentDataView == "balance" ? (
        <BalanceOverview balanceData={amazonBalanceData} />
      ) : null}
    </>
  );
}

export default OverviewManager;
