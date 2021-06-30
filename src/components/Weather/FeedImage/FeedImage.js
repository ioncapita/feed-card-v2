import React from "react";
import natureImg from "../img/tropical-nature.jpg";
import styles from "./FeedImage.module.css";
import { BsHeart } from "react-icons/bs";
import useLocalStorage from "./useLocalStorage";

const FeedImage = () => {
  const [likes, setLikes] = useLocalStorage("likes", 34);
  function incrementLikes() {
    setLikes((prevCount) => prevCount + 1);
  }
  return (
    <div className={styles.container}>
      <img className={styles.feedImage} src={natureImg} alt="tropical nature" />
      <div className={styles.likesContent}>
        <BsHeart className={styles.icon} onClick={incrementLikes} />
        <span className={styles.likes}>{likes}</span>
      </div>
    </div>
  );
};

export default FeedImage;
