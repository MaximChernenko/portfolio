import React from "react";

// styles
import s from "./name.module.css";

const Name = ({ name = "name", surname = "surname" }) => (
  <div className={s.wrapper}>
    <p className={s.name}>{`${name} ${surname}`}</p>
  </div>
);

export default Name;
