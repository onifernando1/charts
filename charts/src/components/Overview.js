import React from "react";
import "../assets/styles/overview.css";
import CustomIncomeGraph from "./CustomIncomeGraph";
import CustomBalanceGraph from "./CustomBalanceGraph";
import CustomCashFlowGraph from "./CustomCashFlowGraph";
import IncomeTable from "./IncomeTable";

function Overview(props) {
  const sp500price = 457.78;
  const sp500percentageChange = "0.86(0.19%)";
  const sp500range = "348.11 - 459.44";
  const companySymbol = props.data[0].symbol;
  const sp500info = "United States / Financials / Capital Markets";
  const sp500marketCap = "430.8B";
  const sp500dividendRate = 6.55;
  const sp500dividendYield = "1.4%";
  const sp500holdingsTracked = 506;
  const sp500beta = 1.01;
  const sp500sharesOutstanding = "942.7 M";
  const incomeRequestData = props.data;
  const balanceRequestData = props.balanceData;
  const cashFlowRequestData = props.cashFlowData;

  return (
    <>
      <div className="overview-container">
        <div className="overview-body-container">
          <div>
            <CustomIncomeGraph data={incomeRequestData} />
          </div>
          <div>
            <IncomeTable data={incomeRequestData} />
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
