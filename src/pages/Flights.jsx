import React from "react";
import { FlightsBody } from "../components/FlightsBody/FlightsBody";
import styles from "./Flights.module.css";

export const Flights = () => {
  return (
    <div className={styles.flights}>
      <FlightsBody />
    </div>
  );
};
