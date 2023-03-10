import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./LoginSlice";
import signupSlice from "./SignupSlice";
import subscriptionSlice from "./SubscriptionSlice";

const store = configureStore({
  reducer: { loginSlice, signupSlice, subscriptionSlice },
});

export default store;
