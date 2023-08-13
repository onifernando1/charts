import React from "react";
import StockBasedCompensation from "./TRASH/StockBasedCompensation";
import { amazonCashFlowRequestData } from "../sampleData/requestData";
import CashEndOfPeriod from "./TRASH/CashEndOfPeriod";
import CapitalExpenditure from "./TRASH/CapitalExpenditure";
import DebtRepayment from "./TRASH/DebtRepayment";
import AnyTable from "./AnyTable";
import CustomCashFlowGraph from "./CustomCashFlowGraph";
import CustomCashFlowCompareIndex from "./CustomCashFlowCompareIndex";

function CashFlowOverview(props) {
  const cashFlowData = props.data;

  return (
    <div className="cash-flow-overview-container">
      <div className="overview-container">
        <div className="overview-body-container">
          <div>
            <CustomCashFlowGraph data={props.data} />
          </div>
          <div>
            <AnyTable data={props.data} title="Cash Flow Table" />
          </div>
          <div>
            <CustomCashFlowCompareIndex
              data={props.data}
              dataB={props.dataB}
              nameA={props.nameA}
              nameB={props.nameB}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashFlowOverview;
