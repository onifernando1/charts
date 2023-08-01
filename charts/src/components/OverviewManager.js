import React from "react";
import Overview from "./Overview";
import { amazonRequestData } from "../sampleData/requestData";

function OverviewManager(props) {
  return (
    <>
      <Overview data={amazonRequestData} />
    </>
  );
}

export default OverviewManager;
