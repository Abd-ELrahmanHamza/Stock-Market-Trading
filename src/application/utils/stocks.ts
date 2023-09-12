import Stock from "../../domain/entities/stock";
import { buyStock, sellStock } from "../slice/userSlice";
import { store } from "../store";

const buyStockUtil = (stock: Stock) => {
  store.dispatch(buyStock(stock));
};

const sellStockUtil = (stock: Stock) => {
  store.dispatch(sellStock(stock));
};
export { buyStockUtil, sellStockUtil };
