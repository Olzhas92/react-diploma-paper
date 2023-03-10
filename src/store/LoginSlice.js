import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "Login",
  initialState: {
    loginArr: [],
    isLoggedIn: false,
  },
  reducers: {
    addLogin(state, action) {
      const newLogin = {
        id: Math.random(),
        email: action.payload.email,
        password: action.payload.password,
      };
      console.log(newLogin);
      state.isLoggedIn = true;
      state.loginArr = [...state.loginArr, newLogin];
      console.log(state.loginArr);
    },
    deleteLogin(state, action) {
      state.loginArr = state.loginArr.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addLogin, deleteLogin } = loginSlice.actions;

export default loginSlice.reducer;
