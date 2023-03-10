import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "Bookings",
  initialState: {
    bookingsArr: [],
  },
  reducers: {
    addHotel(state, action) {
      //   const newHotelBooking = {
      //     id: action.payload.id,
      //     img: action.payload.img,
      //     destination: action.payload.destination,
      //     price: action.payload.price,
      //   };
      //   console.log(newHotelBooking);
      state.bookingsArr.push(action.payload);
      console.log(state.bookingsArr);
      state.bookingsArr = [...state.bookingsArr, action.payload];
    },
    addFlight(state, action) {},
  },
});

export const { addHotel, addFlight } = bookingsSlice.actions;

export default bookingsSlice.reducer;
