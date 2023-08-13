import React from "react";
import "../assets/styles/overview.css";
import CustomIncomeGraph from "./CustomIncomeGraph";
import CustomBalanceGraph from "./CustomBalanceGraph";
import CustomCashFlowGraph from "./CustomCashFlowGraph";
import IncomeTable from "./IncomeTable";
import AnyTable from "./AnyTable";
import { useState, useRef, useEffect } from "react";
import IncomeCompareIndex from "./IncomeCompareIndex";
import CustomIncomeCompareIndex from "./CustomIncomeCompareIndex";

function Overview(props) {
  const incomeRequestData = props.data;
  const companyBData = props.dataB;
  const nameA = props.nameA;
  const nameB = props.nameB;
  const graph = useRef(null);
  const table = useRef(null);
  const compare = useRef(null);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (elementRef) => {
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
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
    <>
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

          <section id="graph">
            <div ref={graph}>
              <CustomIncomeGraph data={incomeRequestData} />
            </div>
          </section>
          <section id="table">
            <div ref={table}>
              <AnyTable data={incomeRequestData} title="Income Table" />
            </div>
          </section>
          <section id="compare">
            <div ref={compare}>
              <CustomIncomeCompareIndex
                data={incomeRequestData}
                dataCompanyB={companyBData}
                nameA={nameA}
                nameB={nameB}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Overview;
