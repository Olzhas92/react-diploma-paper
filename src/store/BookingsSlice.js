import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "Bookings",
  initialState: {
    bookingsArr: [],
    totalPrice: 0,
  },
  reducers: {
    addHotel(state, action) {
      const newHotelRequest = {
        id: Math.random(),
        hotel: action.payload.hotel,
        price: action.payload.price,
        city: action.payload.city,
      };
      console.log(newHotelRequest);
      state.bookingsArr = [...state.bookingsArr, newHotelRequest];
      console.log(state.bookingsArr);
    },
    addFlight(state, action) {},
  },
});

export const { addHotel, addFlight } = bookingsSlice.actions;

export default bookingsSlice.reducer;
