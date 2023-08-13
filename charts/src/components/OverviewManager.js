import React, { useEffect } from "react";
import Overview from "./Overview";
import { useState, useRef } from "react";
import CashFlowOverview from "./CashFlowOverview";
import BalanceOverview from "./BalanceOverview";
import {
  amazonRequestData,
  amazonBalanceData,
  amazonCashFlowRequestData,
  MSFTBalanceData,
  MSFTRequestData,
  MSFTCashFlowData,
} from "../sampleData/requestData";

function OverviewManager(props) {
  const dataViewsArray = ["income", "cashFlow", "balance"];

  const amazonData = {
    income: amazonRequestData,
    balance: amazonBalanceData,
    cashFlow: amazonCashFlowRequestData,
    name: "Amazon",
  };

  const msftData = {
    income: MSFTRequestData,
    balance: MSFTBalanceData,
    cashFlow: MSFTCashFlowData,
    name: "Microsoft",
  };

  const companyDataArray = [amazonData, msftData];

  const [currentDataView, setCurrentDataView] = useState(dataViewsArray[0]);
  const [currentCompanyData, setCurrentCompanyData] = useState(amazonData);
  const [incomeData, setIncomeData] = useState(amazonRequestData);
  const [balanceData, setBalanceData] = useState(amazonBalanceData);
  const [cashFlowData, setCashFlowData] = useState(amazonCashFlowRequestData);
  const [optionSelected, setOptionSelected] = useState("");
  const [currentCompanyBData, setCurrentCompanyBData] = useState(msftData);
  const [activeHeader, setActiveHeader] = useState([true, false, false]);
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  const name = props.name;

  useEffect(() => {
    companyDataArray.forEach((company) => {
      if (company.name == optionSelected) {
        setCurrentCompanyData(company);
      } else {
        setCurrentCompanyBData(company);
      }
    });
  }, [optionSelected]);

  const handleHeaderChange = (index) => {
    let falseArray = [false, false, false];
    falseArray[index] = true;
    setActiveHeader(falseArray);
    console.log(falseArray);
  };

  return (
    <>
      <div className="overview-title-container">
        <div className="select-company-container">
          <select
            value={optionSelected}
            onChange={(e) => setOptionSelected(e.target.value)}
          >
            <option>Amazon</option>
            <option>Microsoft</option>
          </select>
        </div>
        <div className="data-view-container">
          <div>
            <div
              onClick={() => {
                setCurrentDataView(dataViewsArray[0]);
                handleHeaderChange(0);
              }}
              className={`data-view-title ${activeHeader[0]}`}
            >
              Income
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                setCurrentDataView(dataViewsArray[1]);
                handleHeaderChange(1);
              }}
              className={`data-view-title ${activeHeader[1]}`}
            >
              Cash Flow
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                setCurrentDataView(dataViewsArray[2]);
                handleHeaderChange(2);
              }}
              className={`data-view-title ${activeHeader[2]}`}
            >
              Balance
            </div>
          </div>
        </div>
      </div>

      {currentDataView == "income" ? (
        <Overview
          data={currentCompanyData.income}
          dataB={currentCompanyBData.income}
          nameA={currentCompanyData.name}
          nameB={currentCompanyBData.name}
        />
      ) : null}
      {currentDataView == "cashFlow" ? (
        <CashFlowOverview
          data={currentCompanyData.cashFlow}
          dataB={currentCompanyBData.cashFlow}
          nameA={currentCompanyData.name}
          nameB={currentCompanyBData.name}
        />
      ) : null}
      {currentDataView == "balance" ? (
        <BalanceOverview
          data={currentCompanyData.balance}
          dataB={currentCompanyBData.balance}
          nameA={currentCompanyData.name}
          nameB={currentCompanyBData.name}
        />
      ) : null}
    </>
  );
}

export default OverviewManager;
