import React from "react";
import PriceHistory from "./PriceHistory";
import ExchangeData from "./ExchangeData";
import "../assets/styles/overview.css";
import HoldingStats from "./HoldingStats";
import { requestData } from "../sampleData/requestData";
import { useState } from "react";
import RevenueOverTime from "./RevenueOverTime";
import GrossProfitNetIncome from "./GrossProfitNetIncome";
import Ebitda from "./Ebitda";
import EpsAndDilutedEps from "./EpsAndDilutedEps";
import RevenueAndExpenses from "./RevenueAndExpenses";

function Overview() {
  const sp500price = 457.78;
  const sp500percentageChange = "0.86(0.19%)";
  const sp500range = "348.11 - 459.44";
  const sp500title = "Amazon";
  const sp500info = "United States / Financials / Capital Markets";
  const sp500marketCap = "430.8B";
  const sp500dividendRate = 6.55;
  const sp500dividendYield = "1.4%";
  const sp500holdingsTracked = 506;
  const sp500beta = 1.01;
  const sp500sharesOutstanding = "942.7 M";

  return (
    <>
      <div className="overview-container">
        <div className="overview-title-container">
          <div>
            <div className="overview-title">{sp500title}</div>
            <div className="overview-info">{sp500info}</div>
          </div>
          <div>
            <div className="overview-currency">CURRENCY $</div>
          </div>
          <div>
            <div className="overview-watchlist">+ ADD TO WATCHLIST</div>
          </div>
        </div>
        <div>
          <ExchangeData
            price={sp500price}
            percentageChange={sp500percentageChange}
            range={sp500range}
          />
        </div>
        <div>
          {/* <PriceHistory /> */}
          <RevenueOverTime />
        </div>
        <div>
          <GrossProfitNetIncome />
        </div>
        <div>
          <Ebitda />
        </div>
        <div>
          <EpsAndDilutedEps />
        </div>
        <div>
          <RevenueAndExpenses />
        </div>
      </div>
    </>
  );
}

export default Overview;
