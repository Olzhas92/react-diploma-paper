import React from "react";
import { Hero } from "../components/Body/Hero/Hero";
import { Categories } from "../components/Body/Categories/Categories";
import { TopSelling } from "../components/Body/TopSelling/TopSelling";
import { Features } from "../components/Body/Features/Features";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <TopSelling />
      <Features />
    </div>
  );
};
