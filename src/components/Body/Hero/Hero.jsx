import React, { useState } from "react";
import { VideoModal } from "./VideoModal";
import { InfoModal } from "./InfoModal";
import traveller from "../../../assets/traveller.svg";
import play from "../../../assets/play.svg";
import styles from "./Hero.module.css";

export const Hero = () => {
  const [infoIsClicked, setInfoIsClicked] = useState(false);
  const [videoIsClicked, setVideoIsClicked] = useState(false);

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
          <button
            className={styles.hero_buttons_more}
            onClick={() => setInfoIsClicked(true)}
          >
            Find out more
          </button>
          <div className={styles.hero_buttons_demo}>
            <img
              src={play}
              alt=""
              className={styles.hero_buttons_demo_image}
              onClick={() => setVideoIsClicked(true)}
            />
            <button
              className={styles.hero_buttons_demo_button}
              onClick={() => setVideoIsClicked(true)}
            >
              Play Demo
            </button>
          </div>
        </div>
        <div className={styles.modals}>
          {videoIsClicked && (
            <VideoModal closeVideo={() => setVideoIsClicked(false)} />
          )}
          {infoIsClicked && (
            <InfoModal closeInfo={() => setInfoIsClicked(false)}>
              Jadoo is a popular online travel website that offers a wide range
              of travel services, including flight bookings, hotel reservations,
              and vacation packages. The website provides an easy-to-use
              interface with customizable search filters, enabling users to find
              and compare travel options at competitive prices. Additionally, it
              offers customer support and a loyalty program.
            </InfoModal>
          )}
        </div>
      </div>
      <img src={traveller} alt="" className={styles.hero__img} />
    </div>
  );
};
