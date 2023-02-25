import React from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import styles from "./VideoModal.module.css";
import cancelButton from "../../../assets/cancel.svg";

export const VideoModal = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div onClick={props.closeVideo} className={styles.overlay}></div>
      <img
        alt="cancel"
        src={cancelButton}
        className={styles.cancel}
        onClick={props.closeVideo}
      />
      <div className={styles.content}>
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=Gb0TQ7VeApY&t=962s"}
        />
      </div>
    </div>,
    document.getElementById("video")
  );
};
