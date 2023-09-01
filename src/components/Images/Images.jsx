import React from "react";
import styles from "./Images.module.scss";
export const Images = ({ images }) => {
  return (
    <div className={styles.wrapper}>
      <img src={images} alt={`alt-${images}`} />
    </div>
  );
};
