import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "Login",
  initialState: {
    loginArr: [],
  },
  reducers: {
    addLogin(state, action) {
      const newLogin = {
        id: Math.random(),
        name: action.payload.name,
        password: action.payload.password,
      };
      console.log(newLogin);
      state.loginArr.push(newLogin);
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
