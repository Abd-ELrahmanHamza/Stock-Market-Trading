import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Users } from "../../domain/entities/user";
import { getUsers } from "../../infrastructure/services/api/user";

const initialState: {
  users: Users;
  status: string;
  error: string | null;
} = {
  users: {},
  status: "idle",
  error: null,
};
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await getUsers();
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default usersSlice.reducer;
