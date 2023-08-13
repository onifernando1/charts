import React from "react";
import { amazonBalanceData } from "../sampleData/requestData";
import TotalEquity from "./TRASH/TotalEquity";
import CashEquivalents from "./TRASH/CashEquivalents";
import TotalAssets from "./TRASH/TotalAssets";
import TotalLiabilities from "./TRASH/TotalLiabilities";
import LiabilitiesComposition from "./TRASH/LiabilitiesComposition";
import CustomBalanceGraph from "./CustomBalanceGraph";
import BalanceTable from "./BalanceTable";
import AnyTable from "./AnyTable";
import CustomBalanceCompareIndex from "./CustomBalanceCompareIndex";

function BalanceOverview(props) {
  const nameA = props.nameA;
  const nameB = props.nameB;
  const requestDataA = props.data;
  const companyBData = props.dataB;
  return (
    <div className="balance-overview-container">
      <div className="overview-container">
        <div className="overview-body-container">
          <div>
            <CustomBalanceGraph data={props.data} />
          </div>
          <div>
            {/* <BalanceTable data={props.balanceData} /> */}
            <AnyTable data={props.data} title="Balance Table" />
          </div>
          <div>
            <CustomBalanceCompareIndex
              nameA={props.nameA}
              nameB={props.nameB}
              data={props.data}
              dataB={props.dataB}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceOverview;
