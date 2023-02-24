import React from "react";
import { Link } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
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
        <Link to="/" element={<HomePage />}>
          <img src={logo2} alt="" />
        </Link>
        <p>Book your trip in minute, get full pontrol for much longer.</p>
      </div>
      <div className={styles.footer__info}>
        <p>About</p>
        <p>Contacts</p>
        <p>Rules</p>
      </div>
      <div className={styles.footer__social}>
        <div className={styles.footer_social_media}>
          <a href="https://www.facebook.com/">
            <img
              src={facebook}
              alt="facebook"
              className={styles.footer_social_media_facebook}
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src={instagram}
              alt="instagram"
              className={styles.footer_social_media_instagram}
            />
          </a>
          <a href="https://twitter.com/">
            <img
              src={twitter}
              alt="twitter"
              className={styles.footer_social_media_twitter}
            />
          </a>
        </div>
        <span>Discover our app</span>
        <div className={styles.footer_social_stores}>
          <a href="https://play.google.com/store/apps?hl=ru&gl=US&pli=1">
            <img src={googleplay} alt="google play" />
          </a>
          <a href="https://www.apple.com/ru/app-store/">
            <img src={appstore} alt="app store" />
          </a>
        </div>
      </div>
    </div>
  );
};
