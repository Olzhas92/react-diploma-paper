import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "Bookings",
  initialState: {
    hotelsArr: [],
    flightsArr: [],
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
      state.hotelsArr = [...state.hotelsArr, newHotelRequest];
      console.log(state.hotelsArr);
    },
    addFlight(state, action) {
      const newFlightRequest = {
        id: Math.random(),
        price: action.payload.price,
        city: action.payload.city,
      };
      console.log(newFlightRequest);
      state.flightsArr = [...state.flightsArr, newFlightRequest];
      console.log(state.flightsArr);
    },
  },
});

export const { addHotel, addFlight } = bookingsSlice.actions;

export default bookingsSlice.reducer;
