import { CompanyStockRecord } from "../../domain/entities/company";
import { setCompaniesStockRecords } from "../slice/companiesSlice";
import { store } from "../store";

const randomlyUpdateCompanyRecord = (
  minRandomValue: number,
  maxRandomValue: number
) => {
  if (!store.getState().companies || !store.getState().companies.companies)
    return;
  const data = JSON.parse(JSON.stringify(store.getState().companies.companies));
  // Iterate over each company in the object
  for (const company in data) {
    const lastValue: CompanyStockRecord =
      data[company][data[company].length - 1]; // Get the last value in the array
    const randomValue =
      Math.random() * (maxRandomValue - minRandomValue) + minRandomValue; // Generate a random value within the specified range
    const newValue = {
      ...lastValue,
      value: lastValue.value + Math.floor(randomValue),
    }; // Calculate the new value
    data[company].push(newValue); // Append the new value to the array
  }
  store.dispatch(setCompaniesStockRecords(data));
};

const updateCompaniesRecords = () => {
  const intervalId = setInterval(() => {
    const minRandomValue = -5;
    const maxRandomValue = 5;
    randomlyUpdateCompanyRecord(minRandomValue, maxRandomValue);
  }, 10000);
};

export { updateCompaniesRecords };
