import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "Signup",
  initialState: {
    signupArr: [],
  },
  reducers: {
    addSignup(state, action) {
      const newSignup = {
        id: Math.random(),
        name: action.payload.name,
        password: action.payload.password,
      };
      console.log(newSignup);
      state.signupArr.push(newSignup);
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
