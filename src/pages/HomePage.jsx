import React from "react";
import { Hero } from "../components/Body/Hero/Hero";
import { Categories } from "../components/Body/Categories/Categories";
import { TopSelling } from "../components/Body/TopSelling/TopSelling";
import { Features } from "../components/Body/Features/Features";
import { Testimonials } from "../components/Body/Testimonials/Testimonials";
import { Logos } from "../components/Body/Logos/Logos";
import { Subscription } from "../components/Body/Subscription/Subscription";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <TopSelling />
      <Features />
      <Testimonials />
      <Logos />
      <Subscription />
    </div>
  );
};
