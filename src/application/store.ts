import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import stockReducer from "./slice/stocksSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    stocks: stockReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
