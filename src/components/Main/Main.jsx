import React from "react";
import { useState } from "react";
import { Images } from "../Images/Images";
import { useMutation } from "@tanstack/react-query";
import handleGenerateImage from "../../service/handleGenerateImage.service";
import styles from "./Main.module.scss";

export const Main = () => {
  const [valueInput, setValueInput] = useState("");
  const [lengthRequest, setLengthRequest] = useState(4);
  const [images, setImages] = useState([]);

  const { mutate, isLoading } = useMutation({
    mutationKey: ["generatorImage", 0],
    mutationFn: () =>
      handleGenerateImage.postGenerateImage(images, valueInput, lengthRequest),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setValueInput("");
    mutate();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper__container"]}>
        <div className={styles["wrapper__title"]}>
          <h2>AI Photo Generator</h2>
          <p>Create an image from text prompt</p>
        </div>
        <div className={styles["wrapper__forms"]}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Text for your photo..."
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
            />
            <button type="submit">Generate</button>
          </form>
        </div>
        <div className={styles["wrapper__grid"]}>
          {images.map((img, index) => {
            return <Images key={index} images={img} />;
          })}
        </div>
      </div>
    </div>
  );
};
