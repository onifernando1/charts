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

export const getDateAndPropertyArrayFromData = (data, property) => {
  let tempArray = [];
  for (let i = 0; i < data.length; i++) {
    let tempDateAndPropertyArray = [];
    tempDateAndPropertyArray.push(data[i].date);
    tempDateAndPropertyArray.push(data[i][property]);
    tempArray.push(tempDateAndPropertyArray);
  }
  console.log(tempArray);

  return tempArray;
};

[
  [1, 2, 3],
  [10, 25, 35],
];

export const indexNumberConverter = (array) => {
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    let indexValue = (array[i] / array[0]) * 100;
    tempArray.push(indexValue);
  }
  console.log(tempArray);
  return tempArray;
};
