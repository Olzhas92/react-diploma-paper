import { createSlice } from "@reduxjs/toolkit";

const subscriptionSlice = createSlice({
  name: "Subscription",
  initialState: { subscriptionArr: [] },
  reducers: {
    addSubscription(state, action) {
      const newSubscription = {
        id: Math.random(),
        email: action.payload.email,
      };
      console.log(newSubscription);
      state.subscriptionArr = [...state.subscriptionArr, newSubscription];
      console.log(state.subscriptionArr);
    },
  },
});

export const { addSubscription } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
