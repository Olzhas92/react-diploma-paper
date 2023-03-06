import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import styles from "./Footer.module.css";
import logo2 from "../../assets/logo2.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import googleplay from "../../assets/googleplay.svg";
import appstore from "../../assets/appstore.svg";

import { InfoModal } from "../Body/Hero/InfoModal";

export const Footer = () => {
  const [aboutIsClicked, setAboutIsClicked] = useState(false);
  const [contactsIsClicked, setContactsIsClicked] = useState(false);
  const [rulesIsClicked, setRulesIsClicked] = useState(false);
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        <Link to="/" className={styles.footer_logo_link}>
          <h2 className={styles.footer_logo_link_title}>Olzhas & Co.</h2>
        </Link>
        <p>Book your trip in minute, get full pontrol for much longer.</p>
      </div>
      <div className={styles.footer__info}>
        <p onClick={() => setAboutIsClicked(true)}>About</p>
        <p onClick={() => setContactsIsClicked(true)}>Contacts</p>
        <p onClick={() => setRulesIsClicked(true)}>Rules</p>
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
      {aboutIsClicked && (
        <InfoModal closeInfo={() => setAboutIsClicked(false)}>
          "Jadoo" is a popular online travel website that offers a wide range of
          travel services, including flight bookings, hotel reservations, car
          rentals, and vacation packages. The website provides an easy-to-use
          interface with customizable search filters, enabling users to find and
          compare travel options at competitive prices. Additionally, it offers
          customer support and a loyalty program.
        </InfoModal>
      )}
      {contactsIsClicked && (
        <InfoModal closeInfo={() => setContactsIsClicked(false)}>
          <p>Email: customer.service@booking.com</p>
          <p>Phone number: +7 7172 645 600</p>
          <p>Address: 010000, Nur-Sultan, Kabanbay Batyr Ave 15, 16 floor</p>
        </InfoModal>
      )}
      {rulesIsClicked && (
        <InfoModal closeInfo={() => setRulesIsClicked(false)}>
          <p>
            Provide accurate and up-to-date information about travel options,
            prices, and availability. Ensure the security and privacy of
            customer data and transactions. Display clear and transparent
            pricing, including taxes and fees. Offer a user-friendly interface
            that allows customers to easily search and compare travel options.
          </p>
        </InfoModal>
      )}
    </div>
  );
};
