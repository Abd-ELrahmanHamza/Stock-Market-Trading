import { PayloadAction } from "@reduxjs/toolkit";
import User from "../../domain/entities/user";

const addMoneyReducer = (state: User, action: PayloadAction<number>): User => {
  if (action.payload < 0) return state;
  return {
    ...state,
    money: state.money + action.payload,
  };
};

export { addMoneyReducer };
