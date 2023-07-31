import React from "react";
import PriceHistory from "./PriceHistory";
import ExchangeData from "./ExchangeData";
import "../assets/styles/overview.css";

function Overview() {
  const sp500price = 457.78;
  const sp500percentageChange = "0.86(0.19%)";
  const sp500range = "348.11 - 459.44";
  const sp500title = "SPDR S&P 500 ETF Trust";
  const sp500info = "United States / Financials / Capital Markets";

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
          <PriceHistory />
        </div>
      </div>
    </>
  );
}

export default Overview;
