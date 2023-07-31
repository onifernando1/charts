import React from "react";

function HoldingStats(props) {
  return (
    <div className="holding-stats-outer-container">
      <div className="holding-stats-title">Holding Stats</div>
      <div className="holding-stats-container">
        <div className="market-cap-container">
          <div className="market-cap-number">{props.marketCap}</div>
          <div className="market-cap-label">Market Cap</div>
        </div>
        <div className="dividend-rate-container">
          <div className="dividend-rate-number">{props.dividendRate}</div>
          <div className="dividend-rate-label">Dividend Rate</div>
        </div>
        <div className="dividend-yield-container">
          <div className="dividend-yield-number">{props.dividendYield}</div>
          <div className="dividend-yield-label">Dividend Yield</div>
        </div>
        <div className="holdings-tracked-container">
          <div className="holdings-tracked-number">{props.holdingsTracked}</div>
          <div className="holdings-tracked-label">Holdings Tracked</div>
        </div>
        <div className="beta-container">
          <div className="beta-number">{props.beta}</div>
          <div className="beta-label">Beta</div>
        </div>
        <div className="shares-outstanding-container">
          <div className="shares-outstanding-number">
            {props.sharesOutstanding}
          </div>
          <div className="shares-outstanding-label">Shares Outstanding</div>
        </div>
      </div>
    </div>
  );
}

export default HoldingStats;
