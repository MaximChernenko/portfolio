import React from "react";

// styles
import s from "./languages.module.css";

// components
import Icon from "../../helpers/components/Icon";

const Languages = () => (
  <section className={s.section}>
    <h2 className={s.title}>
      <Icon className={s.icon} name="languages" color="#333333" size="30" />
      Language skills
    </h2>
    <ul className={s.list}>
      <li className={s.item}>Ukrainian - native</li>
      <li className={s.item}>Russian - native</li>
      <li className={s.item}>English - intermediate</li>
    </ul>
  </section>
);

export default Languages;
