import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./LoginSlice";
import signupSlice from "./SignupSlice";
import bookingsSlice from "./BookingsSlice";

const store = configureStore({
  reducer: { loginSlice, signupSlice, bookingsSlice },
});

export default store;
