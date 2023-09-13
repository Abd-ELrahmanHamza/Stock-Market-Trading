import { addProfit } from "../slice/userSlice";
import { store } from "../store";

const addProfitUtil = (profit: number) => {
  store.dispatch(addProfit(profit));
};
export { addProfitUtil };
