import React from "react";

function RevenueOverTime(props) {
  const [currentRequestData, setCurrentRequestData] = useState([]);

  const getLastTenYearsFormRequestData = () => {
    const tempRequestData = [];
    for (let i = 0; i < 10; i++) {
      tempRequestData.push(requestData[i]);
    }
    console.log(tempRequestData);
    setCurrentRequestData(tempRequestData);
  };

  getLastTenYearsFormRequestData();

  const getDateAndRevenueData = () => {
    let tempRequestData = [];
  };

  return <div></div>;
}

export default RevenueOverTime;
