import React from "react";
import "../assets/styles/pricehistory.css";
import IndividualPriceHistoryGraph from "./IndividualPriceHistoryGraph";
import { useState } from "react";

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

  const monthPriceLabels = ["Jun 30", "Jul 7", "Jul 14", "Jul 21", "Jul 28"];

  const monthPriceData = [443.28, 438.55, 449.28, 452.18, 456.92];

  const timeFrames = ["week", "oneMonth"];

  const [currentTimeFrame, setCurrentTimeFrame] = useState(timeFrames[0]);

  return (
    <div className="price-history-container">
      <div className="time-frame-switch-container">
        <div onClick={() => setCurrentTimeFrame(timeFrames[0])}>1 Week</div>
        <div onClick={() => setCurrentTimeFrame(timeFrames[1])}>1 Month</div>
      </div>

      {currentTimeFrame == timeFrames[0] ? (
        <IndividualPriceHistoryGraph
          priceData={weekPriceData}
          priceLabels={weekPriceLabels}
        />
      ) : null}
      {currentTimeFrame == timeFrames[1] ? (
        <IndividualPriceHistoryGraph
          priceData={monthPriceData}
          priceLabels={monthPriceLabels}
        />
      ) : null}
    </div>
  );
}

export default PriceHistory;
