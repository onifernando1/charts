import React from "react";
import "../assets/styles/overview.css";
import CustomIncomeGraph from "./CustomIncomeGraph";
import CustomBalanceGraph from "./CustomBalanceGraph";
import CustomCashFlowGraph from "./CustomCashFlowGraph";
import IncomeTable from "./IncomeTable";
import AnyTable from "./AnyTable";
import { useState } from "react";

function Overview(props) {
  const incomeRequestData = props.data;

  return (
    <>
      <div className="overview-container">
        <div className="overview-body-container">
          <div>
            <CustomIncomeGraph data={incomeRequestData} />
          </div>
          <div>
            {/* <IncomeTable data={incomeRequestData} /> */}
            <AnyTable data={incomeRequestData} title="Income Table" />
          </div>
          {/* <div>
            <CustomBalanceGraph data={balanceRequestData} />
          </div>
          <div>
            <CustomCashFlowGraph data={cashFlowRequestData} />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Overview;
