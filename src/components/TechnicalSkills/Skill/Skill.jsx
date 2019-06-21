import React from "react";

// styles
import s from "./skill.module.css";

// components
import Stars from "./Stars/Stars";

const Skill = ({ skill: { name, rate } }) => (
  <div className={s.wrapper}>
    <p className={s.text}>{name}</p>
    <Stars rate={rate} />
  </div>
);

export default Skill;
