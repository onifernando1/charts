import React from "react";
import "../assets/styles/overview.css";
import CustomIncomeGraph from "./CustomIncomeGraph";
import CustomBalanceGraph from "./CustomBalanceGraph";
import CustomCashFlowGraph from "./CustomCashFlowGraph";
import IncomeTable from "./IncomeTable";
import AnyTable from "./AnyTable";
import { useState, useRef } from "react";
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
  const scrollToSection = (elementRef) => {
    window.scrollTo({ top: elementRef.current.offsetTop, behaviour: "smooth" });
  };

  return (
    <>
      <div className="overview-container">
        <div className="overview-body-container">
          <div className="location-tracker-container">
            <div
              className="location-tracker"
              onClick={() => {
                scrollToSection(graph);
              }}
            >
              Graph
            </div>
            <div
              className="location-tracker"
              onClick={() => {
                scrollToSection(table);
              }}
            >
              Table
            </div>
            <div
              className="location-tracker"
              onClick={() => {
                scrollToSection(compare);
              }}
            >
              Compare
            </div>
          </div>

          <div ref={graph}>
            <CustomIncomeGraph data={incomeRequestData} />
          </div>
          <div ref={table}>
            <AnyTable data={incomeRequestData} title="Income Table" />
          </div>
          <div ref={compare}>
            <CustomIncomeCompareIndex
              data={incomeRequestData}
              dataCompanyB={companyBData}
              nameA={nameA}
              nameB={nameB}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
