import React from "react";
import StockBasedCompensation from "./StockBasedCompensation";
import { amazonCashFlowRequestData } from "../sampleData/requestData";

function CashFlowOverview(props) {
  return (
    <div className="cash-flow-overview-container">
      <div className="overview-container">
        <div className="overview-body-container">
          <div>Cash Flow</div>
          <div className="overview-body-left-container">
            <StockBasedCompensation data={amazonCashFlowRequestData} />
          </div>
          <div className="overview-body-middle-container"></div>
          <div className="overview-body-middle-container"></div>
        </div>
      </div>
    </div>
  );
}

export default CashFlowOverview;
