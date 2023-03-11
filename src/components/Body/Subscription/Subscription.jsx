import React, { useState, useEffect } from "react";
import styles from "./Subscription.module.css";

export const Subscription = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const fetchSubscriptions = async (e) => {
    e.preventDefault();
    if (
      email.trim().toLocaleLowerCase().length > 0 &&
      email.includes("@") &&
      email.includes(".")
    ) {
      setIsComplete(true);
      setEmail("");
    } else {
      setIsComplete(false);
    }
    setError(false);
    try {
      const response = await fetch(
        "https://react-diploma-paper-default-rtdb.firebaseio.com/:subscriptions.json",
        {
          method: "POST",
          body: JSON.stringify({ id: Math.random(), email }),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  return (
    <div className={styles.subscription}>
      <div className={styles.subscription__text}>
        <p>
          Subscribe to get information, latest news and other interesting offers
          about Olzhas&Co
        </p>
        <form
          className={styles.subscription_text_form}
          onSubmit={fetchSubscriptions}
        >
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
        {isComplete && <p>You have successfully subscribed!</p>}
        {!isComplete && <p>Please, fill in the form</p>}
      </div>
    </div>
  );
};
