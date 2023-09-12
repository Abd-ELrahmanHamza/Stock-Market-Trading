import Stock from "../../domain/entities/stock";
import {
  buyStock as buyStockStocks,
  sellStock as sellStockStocks,
} from "../slice/stocksSlice";
import {
  buyStock as buyStockUser,
  sellStock as sellStockUser,
} from "../slice/userSlice";
import { store } from "../store";

const buyStockUtil = (stock: Stock) => {
  store.dispatch(buyStockUser(stock));
  store.dispatch(buyStockStocks(stock));
};

const sellStockUtil = (stock: Stock) => {
  store.dispatch(sellStockUser(stock));
  store.dispatch(sellStockStocks(stock));
};
export { buyStockUtil, sellStockUtil };
