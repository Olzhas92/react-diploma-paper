import React from "react";
import styles from "./Footer.module.css";
import logo2 from "../../assets/logo2.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import googleplay from "../../assets/googleplay.svg";
import appstore from "../../assets/appstore.svg";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        <img src={logo2} alt="" />
        <p>Book your trip in minute, get full pontrol for much longer.</p>
      </div>
      <div className={styles.footer__info}>
        <p>About</p>
        <p>Contacts</p>
        <p>Rules</p>
      </div>
      <div className={styles.footer__social}>
        <div className={styles.footer_social_media}>
          <img
            src={facebook}
            alt="facebook"
            className={styles.footer_social_media_facebook}
          />
          <img
            src={instagram}
            alt="instagram"
            className={styles.footer_social_media_instagram}
          />
          <img
            src={twitter}
            alt="twitter"
            className={styles.footer_social_media_twitter}
          />
        </div>
        <span>Discover our app</span>
        <div className={styles.footer_social_stores}>
          <img src={googleplay} alt="google play" />
          <img src={appstore} alt="app store" />
        </div>
      </div>
    </div>
  );
};
