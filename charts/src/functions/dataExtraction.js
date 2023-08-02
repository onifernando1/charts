import { amazonRequestData } from "../sampleData/requestData";

export const getXYearsDataFromRequest = (data, numberOfYears) => {
  let tempArray = [];
  for (let i = numberOfYears - 1; i >= 0; i--) {
    tempArray.push(data[i]);
  }
  return tempArray;
};

export const getPropertyArrayFromData = (data, property) => {
  let tempArray = [];
  for (let i = 0; i < data.length; i++) {
    tempArray.push(data[i][property]);
  }

  return tempArray;
};
