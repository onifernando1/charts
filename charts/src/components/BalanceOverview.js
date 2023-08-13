import React from "react";
import { amazonBalanceData } from "../sampleData/requestData";
import TotalEquity from "./TRASH/TotalEquity";
import CashEquivalents from "./TRASH/CashEquivalents";
import TotalAssets from "./TRASH/TotalAssets";
import TotalLiabilities from "./TRASH/TotalLiabilities";
import LiabilitiesComposition from "./TRASH/LiabilitiesComposition";
import CustomBalanceGraph from "./CustomBalanceGraph";
import BalanceTable from "./BalanceTable";
import AnyTable from "./AnyTable";
import CustomBalanceCompareIndex from "./CustomBalanceCompareIndex";
import { useState, useRef, useEffect } from "react";

function BalanceOverview(props) {
  const nameA = props.nameA;
  const nameB = props.nameB;
  const requestDataA = props.data;
  const companyBData = props.dataB;
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
    <div className="balance-overview-container">
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
            <CustomBalanceGraph data={props.data} />
          </div>
          <div ref={table}>
            {/* <BalanceTable data={props.balanceData} /> */}
            <AnyTable data={props.data} title="Balance Table" />
          </div>
          <div ref={compare}>
            <CustomBalanceCompareIndex
              nameA={props.nameA}
              nameB={props.nameB}
              data={props.data}
              dataB={props.dataB}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceOverview;
