import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./operation";

const pending = (state) => {
  state.isLoading = true;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.isError = true;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoading: false,
    isError: false,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (bilder) =>
    bilder
      .addCase(register.pending, pending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = true;
      })
      .addCase(register.rejected, rejected)
      .addCase(login.pending, pending)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoading = true;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, rejected),
});
export const authReducer = authSlice.reducer;
