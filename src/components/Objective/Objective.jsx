import React from "react";

// styles
import s from "./objective.module.css";

// components
import Icon from "../../helpers/components/Icon";

const Objective = () => (
  <section className={s.section}>
    <h2 className={s.title}>
      <Icon className={s.icon} name="objective" size="30" color="#333333" />
      Objective
    </h2>
    <p className={s.content}>
      ReactJS developer. I want to take a developer position to gain experience
      and improve my skills for future increase.
    </p>
  </section>
);

export default Objective;
