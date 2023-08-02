import React from "react";
import { amazonBalanceData } from "../sampleData/requestData";

function BalanceOverview(props) {
  return (
    <div className="balance-overview-container">
      <div className="overview-container">
        <div className="overview-body-container">
          <div>Balance</div>
          <div className="overview-body-left-container"></div>
          <div className="overview-body-middle-container"></div>
          <div className="overview-body-middle-container"></div>
        </div>
      </div>
    </div>
  );
}

export default BalanceOverview;
