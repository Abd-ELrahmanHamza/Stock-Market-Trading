import User from "../../domain/entities/user";
import { addProfit, setUser } from "../slice/userSlice";
import { store } from "../store";

const addProfitUtil = (profit: number) => {
  store.dispatch(addProfit(profit));
};

const setUserUtil = (user: User) => {
  store.dispatch(setUser(user));
};
export { addProfitUtil, setUserUtil };
