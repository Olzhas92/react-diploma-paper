import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Flights } from "./pages/Flights";
import { Hotels } from "./pages/Hotels";
import { Bookings } from "./pages/Bookings";
import { PageNotFound } from "./pages/PageNotFound";
import { Layout } from "./components/Layout/Layout";
import styles from "./App.module.css";

const App = () => {
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
