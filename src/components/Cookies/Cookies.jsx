import React, { useState, useEffect } from "react";
import styles from "./Cookies.module.css";

export const Cookies = () => {
  const [isVisible, setIsVisible] = useState(true);

  const clickHandler = () => {
    setIsVisible(false);
    localStorage.setItem("cookieBanner", "true");
  };

  //   useEffect(() => {
  //     if (localStorage.getItem("cookieBanner")) {
  //       setIsVisible(false);
  //     }
  //   }, [isVisible]);

  return (
    <div>
      {isVisible && (
        <div className={styles.cookies}>
          <p className={styles.text}>
            Мы используем файлы Cookies, чтобы сделать наш сервис максимально
            полезным для Вас.
          </p>
          <div className={styles.buttons}>
            <button className={styles.information}>Подробнее</button>
            <button className={styles.accept} onClick={clickHandler}>
              Принять
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
