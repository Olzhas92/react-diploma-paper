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
      <img src={card_image} alt="" />
      <span>14-29 June | by Robbin Joseph</span>
      <div>
        <img src={leaf} alt="" />
        <img src={map} alt="" />
        <img src={send} alt="" />
      </div>
      <div>
        <img src={building} alt="" />
        <span>24 people going</span>
        <img src={heart} alt="" />
      </div>
    </div>
  );
};
