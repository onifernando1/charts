import React from "react";
import LineGraph from "./components/LineGraph";
import BarChart from "./components/BarChart";
import BubbleChart from "./components/BubbleChart";
import Overview from "./components/Overview";
import RevenueOverTime from "./components/RevenueOverTime";

function App() {
  return (
    <>
      {/* <Overview /> */}
      <RevenueOverTime />
    </>
  );
}

export default App;
