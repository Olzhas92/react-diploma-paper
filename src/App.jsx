import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Destinations } from "./pages/Destinations";
import { Hotels } from "./pages/Hotels";
import { Flights } from "./pages/Flights";
import { Bookings } from "./pages/Bookings";
import { PageNotFound } from "./pages/PageNotFound";

const App = () => {
  return (
    <div>
      <header>
        <Link href="/destinations">Destinations</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/flights">Flights</Link>
        <Link to="/bookings">Bookings</Link>
      </header>
      <Routes>
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
