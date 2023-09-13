import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./slice/stocksSlice";
import userReducer from "./slice/userSlice";
import companiesSlice from "./slice/companiesSlice";
import transactionsSlice from "./slice/transactionsSlice";
import middlewares from "./middleware";
import services from "../infrastructure/services";

export const store = configureStore({
  reducer: {
    stocks: stockReducer,
    user: userReducer,
    companies: companiesSlice,
    transactions: transactionsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ...middlewares.map((middleware) => middleware(services))
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
