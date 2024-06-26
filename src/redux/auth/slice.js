import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operation";

const pending = (state) => {
  state.loading = true;
};

const rejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
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
      })
      .addCase(register.rejected, rejected),
});
export const authReducer = authSlice.reducer;
