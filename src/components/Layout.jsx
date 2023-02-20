import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/flights">Flights</Link>
        <Link to="/bookings">Bookings</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
