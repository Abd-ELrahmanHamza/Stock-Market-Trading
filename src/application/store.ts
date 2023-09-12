import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import companiesReducer from "./slice/companiesSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    companies: companiesReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
