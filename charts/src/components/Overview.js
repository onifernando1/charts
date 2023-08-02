import React from "react";
import PriceHistory from "./PriceHistory";
import ExchangeData from "./ExchangeData";
import "../assets/styles/overview.css";
import HoldingStats from "./HoldingStats";
import { useState } from "react";
import RevenueOverTime from "./RevenueOverTime";
import GrossProfitNetIncome from "./GrossProfitNetIncome";
import Ebitda from "./Ebitda";
import EpsAndDilutedEps from "./EpsAndDilutedEps";
import RevenueAndExpenses from "./RevenueAndExpenses";
import InterestIncomeExpense from "./InterestIncomeExpense";
import GrossProfitRevenue from "./GrossProfitRevenue";

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
  const requestData = props.data;

  return (
    <>
      <div className="overview-container">
        <div className="overview-title-container">
          <div>
            <div className="overview-title">{companySymbol}</div>
            <div className="overview-info">{sp500info}</div>
          </div>
          <div>
            <div className="overview-currency">CURRENCY $</div>
          </div>
          <div>
            <div className="overview-watchlist">+ ADD TO WATCHLIST</div>
          </div>
        </div>
        <div className="overview-body-container">
          <div className="overview-body-left-container">
            {/* <div>
              <ExchangeData
                price={sp500price}
                percentageChange={sp500percentageChange}
                range={sp500range}
              />
            </div> */}
            <div>
              {/* <PriceHistory /> */}
              <RevenueOverTime data={requestData} />
            </div>
            <div>
              <GrossProfitNetIncome data={requestData} />
            </div>
            <div>
              <Ebitda data={requestData} />
            </div>
          </div>
          <div className="overview-body-middle-container">
            <div>
              <EpsAndDilutedEps data={requestData} />
            </div>
            <div>
              <RevenueAndExpenses data={requestData} />
            </div>
          </div>
          <div className="overview-body-middle-container">
            <div>
              <InterestIncomeExpense data={requestData} />
            </div>
            <div>
              <GrossProfitRevenue data={requestData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
