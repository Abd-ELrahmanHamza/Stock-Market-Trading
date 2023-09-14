import Stock from "../../domain/entities/stock";
import {
  buyStock as buyStockStocks,
  sellStock as sellStockStocks,
} from "../slice/stocksSlice";
import { addTransaction } from "../slice/transactionsSlice";
import {
  buyStock as buyStockUser,
  sellStock as sellStockUser,
} from "../slice/userSlice";
import { store } from "../store";

const buyStockUtil = (stock: Stock) => {
  if (
    stock.count === 0 ||
    stock.price * stock.count > store.getState().user.money
  )
    return;
  store.dispatch(buyStockUser(stock));
  store.dispatch(buyStockStocks(stock));
  store.dispatch(
    addTransaction({
      company: stock.name,
      amount: stock.count,
      price: stock.price,
      date: new Date().toISOString().slice(0, 10),
      type: "buy",
    })
  );
};

const sellStockUtil = (stock: Stock) => {
  store.dispatch(sellStockUser(stock));
  store.dispatch(sellStockStocks(stock));
  store.dispatch(
    addTransaction({
      company: stock.name,
      amount: stock.count,
      price: stock.price,
      date: new Date().toISOString().slice(0, 10),
      type: "sell",
    })
  );
};

export { buyStockUtil, sellStockUtil };
