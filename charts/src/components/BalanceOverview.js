import React from "react";
import { amazonBalanceData } from "../sampleData/requestData";
import TotalEquity from "./TotalEquity";
import CashEquivalents from "./CashEquivalents";
import TotalAssets from "./TotalAssets";
import TotalLiabilities from "./TotalLiabilities";
import LiabilitiesComposition from "./LiabilitiesComposition";
import CustomBalanceGraph from "./CustomBalanceGraph";
import BalanceTable from "./BalanceTable";
import AnyTable from "./AnyTable";

function BalanceOverview(props) {
  return (
    <div className="balance-overview-container">
      <div className="overview-body-container">
        <div>
          <CustomBalanceGraph data={props.balanceData} />
        </div>
        <div>
          {/* <BalanceTable data={props.balanceData} /> */}
          <AnyTable data={props.balanceData} title="Balance Table" />
        </div>
      </div>
    </div>
  );
}

export default BalanceOverview;
