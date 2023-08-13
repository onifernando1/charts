import React from "react";
import "../assets/styles/exchangedata.css";

function ExchangeData(props) {
  return (
    <div className="outer-exchange-data-container">
      <div className="exchange-data-title">Exchange data</div>
      <div className="exchange-data-container">
        <div className="exchange-price-container">
          <div className="exchange-price-number">{props.price} USD</div>
          <div className="exchange-price-label">Price</div>
        </div>
        <div className="exchange-day-change-container">
          <div className="exchange-day-change-percentage">
            {props.percentageChange}
          </div>
          <div className="exchange-day-change-label">Day Change</div>
        </div>
        <div className="exchange-range-container">
          <div className="exchange-range-number">{props.range}</div>
          <div className="exchange-range-label">52-week range</div>
        </div>
      </div>
    </div>
  );
}

export default ExchangeData;
