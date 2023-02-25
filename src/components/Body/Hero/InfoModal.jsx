import React from "react";
import ReactDOM from "react-dom";
import styles from "./InfoModal.module.css";
import cancelButton from "../../../assets/cancel.svg";

export const InfoModal = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.info__modal}>
      <div onClick={props.closeInfo} className={styles.info__overlay}></div>
      <img
        alt="cancel"
        src={cancelButton}
        className={styles.info__cancel}
        onClick={props.closeInfo}
      />
      <div className={styles.info__content}>
        <p className={styles.info_content_paragraph}>{props.children}</p>
      </div>
    </div>,
    document.getElementById("info")
  );
};
