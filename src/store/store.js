import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./LoginSlice";
import signupSlice from "./SignupSlice";
import subscriptionSlice from "./SubscriptionSlice";
import bookingsSlice from "./BookingsSlice";

const store = configureStore({
  reducer: { loginSlice, signupSlice, subscriptionSlice, bookingsSlice },
});

export default store;
