import React from "react";
import LineGraph from "./components/LineGraph";
import BarChart from "./components/BarChart";
import BubbleChart from "./components/BubbleChart";
import Overview from "./components/Overview";
import RevenueOverTime from "./components/RevenueOverTime";
import GrossProfitNetIncome from "./components/GrossProfitNetIncome";

function App() {
  return (
    <>
      {/* <Overview /> */}
      {/* <RevenueOverTime /> */}
      <GrossProfitNetIncome />
    </>
  );
}

export default App;
