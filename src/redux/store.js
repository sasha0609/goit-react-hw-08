import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { contactReducer } from "./contact/contactsSlice";
import { filterReducer } from "./filter/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
