import { store } from "../store";

const getCompanyRecord = (company: string) => {
  return store.getState().companies[company];
};

export { getCompanyRecord };
