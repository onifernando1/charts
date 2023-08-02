import React from "react";
import Overview from "./Overview";
import { useState } from "react";
import { amazonRequestData } from "../sampleData/requestData";
import { MSFTRequestData } from "../sampleData/requestData";

function OverviewManager(props) {
  const [currentRequestData, setCurrentRequestData] =
    useState(amazonRequestData);
  return (
    <>
      <div
        onClick={() => {
          setCurrentRequestData(amazonRequestData);
        }}
      >
        Amazon
      </div>
      <div
        onClick={() => {
          setCurrentRequestData(MSFTRequestData);
        }}
      >
        MSFT
      </div>
      <div className="overview-title-container">
        <div>
          <div className="overview-title">{currentRequestData[0].symbol}</div>
        </div>
        <div>
          <div className="overview-currency">CURRENCY $</div>
        </div>
        <div>
          <div className="overview-watchlist">+ ADD TO WATCHLIST</div>
        </div>
      </div>
      <Overview data={currentRequestData} /> /*Overview is actually Income Data
      */
    </>
  );
}

export default OverviewManager;
