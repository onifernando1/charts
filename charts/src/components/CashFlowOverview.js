import React from "react";
import StockBasedCompensation from "./StockBasedCompensation";
import { amazonCashFlowRequestData } from "../sampleData/requestData";
import CashEndOfPeriod from "./CashEndOfPeriod";
import CapitalExpenditure from "./CapitalExpenditure";
import DebtRepayment from "./DebtRepayment";
import AnyTable from "./AnyTable";
import CustomCashFlowGraph from "./CustomCashFlowGraph";

function CashFlowOverview(props) {
  const cashFlowData = props.data;

  return (
    <div className="cash-flow-overview-container">
      <div className="overview-container">
        <div className="overview-body-container">
          <div>
            <CustomCashFlowGraph data={cashFlowData} />
          </div>
          <div>
            <AnyTable data={cashFlowData} title="Cash Flow Table" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashFlowOverview;
