import React from "react";
import mike_taylor from "../../../assets/mike_taylor.svg";
import styles from "./Testimonials.module.css";

export const CarouselCard = (props) => {
  return (
    <div className={styles.carousel}>
      <img src={mike_taylor} alt="" className={styles.carouse__image} />
      <div className={styles.carousel__text}>
        <p className={styles.carousel_text_paragraph}>
          “On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no.”
        </p>
        <p>{props.children}</p>
      </div>
    </div>
  );
};
