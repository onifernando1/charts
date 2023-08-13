import React from "react";
import { useState } from "react";
import {
  amazonRequestData,
  amazonBalanceData,
  amazonCashFlowRequestData,
  MSFTBalanceData,
  MSFTRequestData,
  MSFTCashFlowData,
} from "../../sampleData/requestData";
import OverviewManager from "../OverviewManager";

function CompanySwitcher(props) {
  const [currentCompanyData, setCurrentCompanyData] = useState({
    income: amazonRequestData,
    balance: amazonBalanceData,
    cashFlow: amazonCashFlowRequestData,
  });

  const updateCurrentCompanyData = (
    name,
    incomeData,
    balanceData,
    cashFlowData
  ) => {
    let obj = {
      income: incomeData,
      balance: balanceData,
      cashFlow: cashFlowData,
      name: name,
    };
    console.log(obj);
    setCurrentCompanyData(obj);
  };

  return (
    <>
      <div
        onClick={() =>
          updateCurrentCompanyData(
            "amzn",
            amazonRequestData,
            amazonBalanceData,
            amazonCashFlowRequestData
          )
        }
        style={{ color: "white" }}
      >
        Amazon
      </div>
      <div
        onClick={() =>
          updateCurrentCompanyData(
            "msft",
            MSFTRequestData,
            MSFTBalanceData,
            MSFTCashFlowData
          )
        }
        style={{ color: "white" }}
      >
        MSFT
      </div>

      <div>
        <OverviewManager
          incomeData={currentCompanyData.income}
          balanceData={currentCompanyData.balance}
          cashFlowData={currentCompanyData.cashFlow}
          name={currentCompanyData.name}
        />
      </div>
    </>
  );
}

export default CompanySwitcher;
