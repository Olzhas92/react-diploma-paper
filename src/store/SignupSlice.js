import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "Signup",
  initialState: {
    signupArr: [],
    isSignedUp: false,
  },
  reducers: {
    addSignup(state, action) {
      const newSignup = {
        id: Math.random(),
        email: action.payload.email,
        password: action.payload.password,
      };
      console.log(newSignup);
      state.isSignedUp = true;
      state.signupArr = [...state.signupArr, newSignup];
      console.log(state.signupArr);
    },
    deleteSignup(state, action) {
      state.signupArr = state.signupArr.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addSignup, deleteSignup } = signupSlice.actions;

export default signupSlice.reducer;
