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
        <p className={styles.info_content_paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, optio
          ratione! Minima quidem accusamus mollitia in sint corporis quaerat
          impedit maiores natus eius, odit obcaecati sed laborum provident nemo
          nam est. Temporibus magni qui deleniti exercitationem at autem nulla
          illum omnis beatae? Iste quos recusandae inventore. Quisquam hic ipsa
          voluptatem?
        </p>
      </div>
    </div>,
    document.getElementById("info")
  );
};
