import styles from "./card.module.scss";
import React from "react";

function Card({ title, image, textCenter, onClick, size ,color, outline }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className={`${styles.container} ${styles[color]} ${styles[size]} ${styles[outline]}`}
      style={image && backgroundImageStyle}
      onClick={onClick}
    >
      {image && <div className={styles.container__overlay}></div>}
      <h2
        className={`${styles.container__title} 
      ${
        textCenter
          ? styles.container__title__center
          : styles.container__title__left
      }`}
      >
        {title}
      </h2>
    </div>
  );
}

export default Card;
