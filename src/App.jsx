import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Flights } from "./pages/Flights";
import { Hotels } from "./pages/Hotels";
import { Bookings } from "./pages/Bookings";
import { PageNotFound } from "./pages/PageNotFound";
import { Layout } from "./components/Layout/Layout";
import styles from "./App.module.css";

const App = () => {
  const loginArr = useSelector((state) => state.loginSlice.loginArr);
  const signupArr = useSelector((state) => state.signupSlice.signupArr);
  const subscriptionArr = useSelector(
    (state) => state.subscriptionSlice.subscriptionArr
  );
  const hotelsArr = useSelector((state) => state.bookingsSlice.hotelsArr);
  const flightsArr = useSelector((state) => state.bookingsSlice.flightsArr);
  const hotelsTotalPrice = useSelector(
    (state) => state.bookingsSlice.hotelsTotalPrice
  );
  const flightsTotalPrice = useSelector(
    (state) => state.bookingsSlice.flightsTotalPrice
  );

  useEffect(() => {}, [loginArr]);
  useEffect(() => {}, [signupArr]);
  useEffect(() => {}, [subscriptionArr]);
  useEffect(() => {}, [hotelsArr]);
  useEffect(() => {}, [flightsArr]);
  useEffect(() => {}, [hotelsTotalPrice]);
  useEffect(() => {}, [flightsTotalPrice]);

  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="hotels" element={<Hotels />} />
          <Route path="flights" element={<Flights />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
