import React from "react";
import traveller from "../../../assets/traveller.svg";
import play from "../../../assets/play.svg";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__text}>
        <h2 className={styles.hero_text_h2}>
          Best Destinations around the world
        </h2>
        <h1 className={styles.hero_text_title}>
          Travel, enjoy and live a new and full life
        </h1>
        <p className={styles.hero_text_paragraph}>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className={styles.hero__buttons}>
          <button className={styles.hero_buttons_more}>Find out more</button>
          <div className={styles.hero_buttons_demo}>
            <img src={play} alt="" className={styles.hero_buttons_demo_image} />
            <button className={styles.hero_buttons_demo_button}>
              Play Demo
            </button>
          </div>
        </div>
      </div>
      <img src={traveller} alt="" className={styles.hero__img} />
    </div>
  );
};
