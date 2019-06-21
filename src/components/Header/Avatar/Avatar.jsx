import React from "react";

// styles
import s from "./avatar.module.css";

const Avatar = ({ src, alt = "img" }) => (
  <div className={s.wrapper}>
    <img src={src} alt={alt} className={s.img} />
    <div className={s.backdrop} />
  </div>
);

export default Avatar;
