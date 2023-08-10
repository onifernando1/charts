import React from "react";
import { useState, useEffect } from "react";
import "../assets/styles/overview.css";
import "../assets/styles/income-table.css";
import {
  getPropertyArrayFromData,
  getXYearsDataFromRequest,
  indexNumberConverter,
  getXYearsDataFromRequestNewestToOldest,
} from "../functions/dataExtraction";

function IncomeTable(props) {
  const [dateArray, setDateArray] = useState("");
  const [revenueArray, setRevenueArray] = useState("");
  const [ebitdaArray, setEbitdaArray] = useState("");
  const [grossProfitArray, setGrossProfitArray] = useState("");
  const [netIncomeArray, setNetIncomeArray] = useState("");
  const [grossProfitRatioArray, setGrossProfitRatioArray] = useState("");
  const [operatingIncomeArray, setOperatingIncomeArray] = useState("");
  const [operatingExpensesArray, setOperatingExpensesArray] = useState("");
  const [dataArray, setDataArray] = useState([]);

  const requestData = props.data;

  useEffect(() => {
    getDateAndRevenueArraysFromOriginalRequest();
  }, [props.data]);

  const getDateAndRevenueArraysFromOriginalRequest = () => {
    const lastFiveYearsDataDescending = getXYearsDataFromRequestNewestToOldest(
      requestData,
      5
    );
    // console.log(lastFiveYearsDataDescending);
    // setDataArray(lastFiveYearsDataDescending);
    // setDateArray(getPropertyArrayFromData(lastFiveYearsDataDescending, "date"));
    // setRevenueArray(
    //   getPropertyArrayFromData(lastFiveYearsDataDescending, "revenue")
    // );
    const revArray = getPropertyArrayFromData(
      lastFiveYearsDataDescending,
      "revenue"
    );
    console.log(revArray);
    const date = getPropertyArrayFromData(lastFiveYearsDataDescending, "date");
    console.log(date);
    const yearArray = getYearArray(date);
    console.log(yearArray);
    // let revenueTableObject = { category: "Revenue" };
    // for (let i = 0; i < yearArray.length; i++) {
    //   console.log(yearArray[i]);
    //   revenueTableObject[yearArray[i]] = lastFiveYearsDataDescending[i].revenue;
    //   console.log(revenueTableObject);
    // }
    let revenueTableObject = createTableObject(
      "Revenue",
      lastFiveYearsDataDescending,
      yearArray
    );
    console.log(revenueTableObject);
  };

  const createTableObject = (property, dataArray, yearArray) => {
    let object = { category: property };
    for (let i = 0; i < yearArray.length; i++) {
      console.log(yearArray[i]);
      object[yearArray[i]] = dataArray[i].revenue;
    }
    return object;
  };

  const getYearArray = (array) => {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
      let tempYear = array[i].substring(0, 4);
      tempArray.push(tempYear);
    }
    return tempArray;
  };

  return (
    <div className="income table">
      {/* {dataArray.length >= 1 ? (
        <>
          <table>
            <tr>
              <th>{dataArray[0].date} </th>
              <th>Year 2 </th>
            </tr>
          </table>
          {dataArray.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.ebitda}</td>
              </tr>
            );
          })}
        </>
      ) : null} */}
    </div>
  );
}

export default IncomeTable;
