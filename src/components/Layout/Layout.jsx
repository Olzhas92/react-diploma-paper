import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Header/Navbar";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
