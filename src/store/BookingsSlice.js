import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "Bookings",
  initialState: {
    hotelsArr: [],
    flightsArr: [],
    hotelsTotalPrice: 0,
    flightsTotalPrice: 0,
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
      state.hotelsTotalPrice = state.hotelsArr.reduce(
        (accumulator, currentValue) =>
          parseInt(accumulator) + parseInt(currentValue.price),
        0
      );
      console.log(`hotelsTotalPrice is ${state.hotelsTotalPrice}`);
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
      state.flightsTotalPrice = state.flightsArr.reduce(
        (accumulator, currentValue) =>
          parseInt(accumulator) + parseInt(currentValue.price),
        0
      );
      console.log(`flightsTotalPrice is ${state.flightsTotalPrice}`);
    },
  },
});

export const { addHotel, addFlight, finalPrice } = bookingsSlice.actions;

export default bookingsSlice.reducer;
