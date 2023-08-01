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
      <Overview data={currentRequestData} />
    </>
  );
}

export default OverviewManager;
