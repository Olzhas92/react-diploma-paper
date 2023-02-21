import React from "react";
import styles from "../Features.module.css";
import card_image from "../../../../assets/card_image.svg";
import leaf from "../../../../assets/leaf.svg";
import map from "../../../../assets/map.svg";
import send from "../../../../assets/send.svg";
import building from "../../../../assets/building.svg";
import heart from "../../../../assets/heart.svg";

export const FeaturesCard = () => {
  return (
    <div className={styles.features__card}>
      <div className={styles.card}>
        <img src={card_image} alt="" />
        <p>Trip To Greece</p>
        <span>14-29 June | by Robbin Joseph</span>
        <div className={styles.card__icons}>
          <img src={leaf} alt="" />
          <img src={map} alt="" />
          <img src={send} alt="" />
        </div>
        <div className={styles.card__stats}>
          <div className={styles.card_stats_text}>
            <img src={building} alt="" />
            <span>24 people going</span>
          </div>
          <img src={heart} alt="" />
        </div>
      </div>
    </div>
  );
};
