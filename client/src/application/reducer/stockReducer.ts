import { PayloadAction } from "@reduxjs/toolkit";
import Stock, { StockState } from "../../domain/entities/stock";

const buyStockReducer = (state: StockState, action: PayloadAction<Stock>) => {
  if (action.payload.price < 0 || action.payload.count < 0) return state;

  //   let indexToRemove = -1;
  const resultState = state.stocks.map((stock, index) => {
    if (stock.name === action.payload.name) {
      //   if (stock.count === action.payload.count) indexToRemove = index;
      return {
        ...stock,
        count: stock.count - action.payload.count,
      };
    }
    return stock;
  });
  //   if (indexToRemove !== -1) resultState.splice(indexToRemove, 1);
  return { stocks: resultState, status: "idle", error: null };
};

const sellStockReducer = (state: StockState, action: PayloadAction<Stock>) => {
  if (action.payload.price < 0 || action.payload.count < 0) return state;
  return {
    stocks: state.stocks.map((stock) => {
      if (stock.name === action.payload.name) {
        return {
          ...stock,
          count: stock.count + action.payload.count,
        };
      }
      return stock;
    }),
    status: "idle",
    error: null,
  };
};

const updateStockReducer = (
  state: StockState,
  action: PayloadAction<Stock>
) => {
  console.log(action.payload,"stock updated");
  if (action.payload.price < 0 || action.payload.count < 0) return state;
  return {
    stocks: state.stocks.map((stock) => {
      if (stock.name === action.payload.name) {
        return {
          ...stock,
          count: action.payload.count,
          price: action.payload.price,
        };
      }
      return stock;
    }),
    status: "idle",
    error: null,
  };
};

export { buyStockReducer, sellStockReducer, updateStockReducer };
