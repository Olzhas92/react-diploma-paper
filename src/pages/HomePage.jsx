import React from "react";
import { Hero } from "../components/Body/Hero/Hero";
import { Categories } from "../components/Body/Categories/Categories";
import { TopSelling } from "../components/Body/TopSelling/TopSelling";
import { Features } from "../components/Body/Features/Features";
import { Testimonials } from "../components/Body/Testimonials/Testimonials";
import { Logos } from "../components/Body/Logos/Logos";
import { Subscription } from "../components/Body/Subscription/Subscription";
import { Cookies } from "../components/Cookies/Cookies";
import styles from "./HomePage.module.css"

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Hero />
      <Categories />
      <TopSelling />
      <Features />
      <Testimonials />
      <Logos />
      <Subscription />
      <Cookies />
    </div>
  );
};
