import React from "react";
import { requestData } from "../sampleData/requestData";

function Ebitda() {
  const [dateArray, setDateArray] = useState("");
  const [ebitdaArray, setEbidtaArray] = useState("");

  useEffect(() => {
    getDateAndEbitdaArraysFromOriginalRequest();
  }, []);

  const getLastTenYearsFormRequestDataSorted = () => {
    let tempLastTenYearsArray = [];
    for (let i = 9; i >= 0; i--) {
      tempLastTenYearsArray.push(requestData[i]);
    }
    return tempLastTenYearsArray;
  };

  const getDateAndEbitdaData = (data) => {
    let tempArray = [];
    for (let i = 0; i < data.length; i++) {
      const tempDate = data[i].date;
      const tempEbitda = data[i].ebitda;
      const tempSortedData = [tempDate, tempEbitda];
      tempArray.push(tempSortedData);
    }
    return tempArray;
  };

  const getDateAndEbitdaDataFromOriginalRequest = () => {
    const lastTenYearsDataArray = getLastTenYearsFormRequestDataSorted();
    const dateAndEbitdaArray = getDateAndEbitdaData(lastTenYearsDataArray);
    console.log(dateAndEbitdaArray);
    return dateAndEbitdaArray;
  };

  const getDateArrayFromSortedData = (dataArray) => {
    const tempDateArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempDateArray.push(dataArray[i][0]);
    }
    console.log(tempDateArray);
    setDateArray(tempDateArray);
    return tempDateArray;
  };

  const getEbitdaArrayFromSortedData = (dataArray) => {
    const tempArray = [];
    for (let i = 0; i < dataArray.length; i++) {
      tempArray.push(dataArray[i][1]);
    }
    console.log(tempArray);
    setEbitdaArray(tempArray);
    return tempArray;
  };

  const getDateAndEbitdaArraysFromOriginalRequest = () => {
    const joinedArray = getDateAndEbitdaDataFromOriginalRequest();
    const dateArray = getDateArrayFromSortedData(joinedArray);
    const ebitdaArray = getEbitdaArrayFromSortedData(joinedArray);
  };

  return <div></div>;
}

export default Ebitda;
