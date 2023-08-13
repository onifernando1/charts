import React from "react";
import StockBasedCompensation from "./TRASH/StockBasedCompensation";
import { amazonCashFlowRequestData } from "../sampleData/requestData";
import CashEndOfPeriod from "./TRASH/CashEndOfPeriod";
import CapitalExpenditure from "./TRASH/CapitalExpenditure";
import DebtRepayment from "./TRASH/DebtRepayment";
import AnyTable from "./AnyTable";
import CustomCashFlowGraph from "./CustomCashFlowGraph";
import CustomCashFlowCompareIndex from "./CustomCashFlowCompareIndex";
import { useEffect, useRef, useState } from "react";

function CashFlowOverview(props) {
  const cashFlowData = props.data;
  const graph = useRef(null);
  const table = useRef(null);
  const compare = useRef(null);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop + 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const graphPosition = graph.current.offsetTop;
      const tablePosition = table.current.offsetTop;
      const comparePosition = compare.current.offsetTop;

      if (scrollPosition >= graphPosition && scrollPosition < tablePosition) {
        setActiveSection("graph");
      } else if (
        scrollPosition >= tablePosition &&
        scrollPosition < comparePosition
      ) {
        setActiveSection("table");
      } else if (scrollPosition >= comparePosition) {
        setActiveSection("compare");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="cash-flow-overview-container">
      <div className="overview-container">
        <div className="overview-body-container">
          <div className="location-tracker-container">
            <div
              onClick={() => {
                scrollToSection(graph);
              }}
              className={
                activeSection === "graph"
                  ? "location-tracker section-active"
                  : "location-tracker"
              }
            >
              Graph
            </div>
            <div
              className={
                activeSection === "table"
                  ? "location-tracker section-active"
                  : "location-tracker"
              }
              onClick={() => {
                scrollToSection(table);
              }}
            >
              Table
            </div>
            <div
              className={
                activeSection === "compare"
                  ? "location-tracker section-active"
                  : "location-tracker"
              }
              onClick={() => {
                scrollToSection(compare);
              }}
            >
              Compare
            </div>
          </div>

          <div ref={graph}>
            <CustomCashFlowGraph data={props.data} />
          </div>
          <div ref={table}>
            <AnyTable data={props.data} title="Cash Flow Table" />
          </div>
          <div ref={compare}>
            <CustomCashFlowCompareIndex
              data={props.data}
              dataB={props.dataB}
              nameA={props.nameA}
              nameB={props.nameB}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashFlowOverview;
