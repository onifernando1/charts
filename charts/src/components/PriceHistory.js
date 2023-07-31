import React from "react";
import "../assets/styles/pricehistory.css";
import IndividualPriceHistoryGraph from "./IndividualPriceHistoryGraph";

function PriceHistory() {
  const weekPriceLabels = [
    "Jul 24",
    "Jul 25",
    "Jul 26",
    "Jul 27",
    "Jul 28",
    "Jul 29",
    "Jul 30",
    "Jul 31",
  ];

  const weekPriceData = [
    454.2, 455.44, 455.51, 452.49, 456.92, 456.92, 456.92, 456.92,
  ];

  return (
    <div className="price-history-container">
      <IndividualPriceHistoryGraph
        priceData={weekPriceData}
        priceLabels={weekPriceLabels}
      />
    </div>
  );
}

export default PriceHistory;
