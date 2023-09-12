import { PayloadAction } from "@reduxjs/toolkit";
import Stock from "../../domain/entities/stock";

const buyStockReducer = (state: Stock[], action: PayloadAction<Stock>) => {
  if (action.payload.price < 0 || action.payload.count < 0) return state;

  //   let indexToRemove = -1;
  const resultState = state.map((stock, index) => {
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
  return resultState;
};

const sellStockReducer = (state: Stock[], action: PayloadAction<Stock>) => {
  if (action.payload.price < 0 || action.payload.count < 0) return state;
  return state.map((stock) => {
    if (stock.name === action.payload.name) {
      return {
        ...stock,
        count: stock.count + action.payload.count,
      };
    }
    return stock;
  });
};

export { buyStockReducer, sellStockReducer };
