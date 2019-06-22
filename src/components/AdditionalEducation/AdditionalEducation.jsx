import React from "react";

// styles
import s from "./additional-education.module.css";

// components
import Icon from "../../helpers/components/Icon";

const AdditionalEducation = () => (
  <section className={s.section}>
    <h2 className={s.title}>
      <Icon
        className={s.icon}
        name="additional-education"
        color="#333333"
        size="30"
      />
      Additional Education
    </h2>
    <div className={s.groupper}>
      <p className={s.years}>2018 - 2019</p>
      <p>
        <b>GoIT</b> | In this course I studied: html, css, javascript, react and
        redux.
      </p>
    </div>
  </section>
);

export default AdditionalEducation;
