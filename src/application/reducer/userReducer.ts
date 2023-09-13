import { PayloadAction } from "@reduxjs/toolkit";
import User from "../../domain/entities/user";
import Stock from "../../domain/entities/stock";

const addStock = (
  state: User,
  action: PayloadAction<Stock>,
  method: string
): Stock[] => {
  const stockIndex = state.stocks.findIndex(
    (stock) => stock.name === action.payload.name
  );
  const tempStocks = [...state.stocks];
  if (stockIndex !== -1) {
    if (
      method === "remove" &&
      tempStocks[stockIndex].count === action.payload.count
    ) {
      tempStocks.splice(stockIndex, 1);
    } else {
      tempStocks[stockIndex] = {
        ...tempStocks[stockIndex],
        count:
          tempStocks[stockIndex].count +
          (method === "add" ? action.payload.count : -action.payload.count),
      };
    }
  } else {
    tempStocks.push(action.payload);
  }
  return tempStocks;
};

const addMoneyReducer = (state: User, action: PayloadAction<number>): User => {
  if (action.payload < 0) return state;
  return {
    ...state,
    money: state.money + action.payload,
  };
};

const buyStockReducer = (state: User, action: PayloadAction<Stock>): User => {
  if (
    action.payload.price < 0 ||
    action.payload.count < 0 ||
    action.payload.price * action.payload.count > state.money
  ) {
    return state;
  }
  const newStocks = addStock(state, action, "add");
  return {
    ...state,
    money: state.money - action.payload.price * action.payload.count,
    stocksCount: state.stocksCount + action.payload.count,
    stocks: newStocks,
  };
};

const sellStockReducer = (state: User, action: PayloadAction<Stock>): User => {
  if (action.payload.count < 0 || action.payload.price < 0) return state;
  const newStocks = addStock(state, action, "remove");

  return {
    ...state,
    money: state.money + action.payload.price * action.payload.count,
    stocksCount: state.stocksCount - action.payload.count,
    stocks: newStocks,
  };
};

const addProfitReducer = (state: User, action: PayloadAction<number>): User => {
  const date = new Date();
  return {
    ...state,
    profit: {
      ...state.profit,
      [`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`]:
        action.payload,
    },
  };
};

const setUserReducer = (state: User, action: PayloadAction<User>): User => {
  return action.payload;
};

export {
  addMoneyReducer,
  buyStockReducer,
  sellStockReducer,
  addProfitReducer,
  setUserReducer,
};
