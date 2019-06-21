import React from "react";

// styles
import s from "./education.module.css";

// components
import Icon from "../../helpers/components/Icon";

const Education = () => (
  <section className={s.section}>
    <h2 className={s.title}>
      <Icon className={s.icon} name="education" color="#333333" size="30" />
      Education
    </h2>
    <ul className={s.list}>
      <li className={s.item}>Duration - 2016 - 2020</li>
      <li className={s.item}>
        University - National Technical University of Ukraine 'Kyiv Polytechnic
        Institute'
      </li>
      <li className={s.item}>
        Specialty - Automation and computer-integrated technologies
      </li>
    </ul>
  </section>
);

export default Education;
