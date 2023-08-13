// import React, { useState } from "react";
// import LineGraph from "./LineGraph";
// import "../assets/styles/cash-end.css";
// import { useEffect } from "react";
// import {
//   getPropertyArrayFromData,
//   getXYearsDataFromRequest,
// } from "../../functions/dataExtraction";

// function CashEndOfPeriod(props) {
//   const [dateArray, setDateArray] = useState("");
//   const [cashEndOfPeriodArray, setCashEndOfPeriodArray] = useState("");
//   const requestData = props.data;

//   useEffect(() => {
//     getDateAndCashEndDataFromRequest();
//   }, [props.data]);

//   const getDateAndCashEndDataFromRequest = () => {
//     const lastTenYearsData = getXYearsDataFromRequest(requestData, 10);
//     setDateArray(getPropertyArrayFromData(lastTenYearsData, "date"));
//     setCashEndOfPeriodArray(
//       getPropertyArrayFromData(lastTenYearsData, "cashAtEndOfPeriod")
//     );
//   };

//   return (
//     <div className="default-container">
//       <div className="cash-end-title">End Of Period Cash</div>
//       <LineGraph
//         x={dateArray}
//         dataset1={{ data: cashEndOfPeriodArray, label: "$" }}
//       />
//     </div>
//   );
// }

// export default CashEndOfPeriod;
