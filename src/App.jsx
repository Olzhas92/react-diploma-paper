import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Destinations } from "./pages/Destinations";
import { Hotels } from "./pages/Hotels";
import { Flights } from "./pages/Flights";
import { Bookings } from "./pages/Bookings";
import { PageNotFound } from "./pages/PageNotFound";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="destinations" element={<Destinations />} />
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
