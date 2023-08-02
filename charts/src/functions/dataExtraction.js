import { amazonRequestData } from "../sampleData/requestData";

export const getXYearsDataFromRequest = (data, numberOfYears) => {
  let tempArray = [];
  for (let i = numberOfYears - 1; i >= 0; i--) {
    tempArray.push(data[i]);
  }
  console.log(tempArray);
  return tempArray;
};
