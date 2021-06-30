import React from "react";
import natureImg from "../img/tropical-nature.jpg";
import styles from "./FeedImage.module.css";

const FeedImage = () => {
  return (
    <div className={styles.container}>
      <img className={styles.feedImage} src={natureImg} alt="tropical nature" />
    </div>
  );
};

export default FeedImage;
