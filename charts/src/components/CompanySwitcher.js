import React from "react";
import { useState } from "react";
import {
  amazonRequestData,
  amazonBalanceData,
  amazonCashFlowRequestData,
} from "../sampleData/requestData";
import { MSFTRequestData } from "../sampleData/requestData";
import CashFlowOverview from "./CashFlowOverview";
import BalanceOverview from "./BalanceOverview";
import OverviewManager from "./OverviewManager";

function CompanySwitcher(props) {
  const currentCompanyData = {
    income: amazonRequestData,
    balance: amazonBalanceData,
    cashFlow: amazonCashFlowRequestData,
  };
  return (
    <>
      <div style={{ color: "white" }}>Switch</div>
      <div>
        <OverviewManager
          incomeData={currentCompanyData.income}
          balanceData={currentCompanyData.balance}
          cashFlowData={currentCompanyData.cashFlow}
        />
      </div>
    </>
  );
}

export default CompanySwitcher;
