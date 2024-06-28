import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { login, logOut, refreshUser, register } from "./operations";

const pending = (state) => {
  state.isLoading = true;
};

const rejected = (state) => {
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
      .addCase(login.rejected, rejected)
      .addCase(logOut.pending, pending)
      .addCase(logOut.fulfilled, (state) => {
        state.name = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.items = [];
      })
      .addCase(logOut.rejected, rejected)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
