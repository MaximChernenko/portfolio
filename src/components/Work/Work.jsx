import React from "react";

// styles
import s from "./work.module.css";

// components
import Icon from "../../helpers/components/Icon";

const Work = () => (
  <section className={s.section}>
    <h2 className={s.title}>
      <Icon className={s.icon} name="work" color="#333333" size="30" />
      Work experience
    </h2>
    <div className={s.groupper}>
      <ul className={s.list}>
        <li className={s.item}>Duration - March 2017 - May 2019</li>
        <li className={s.item}>Company - AVTstudio</li>
        <li className={s.item}>Role - Assistance Manager</li>
      </ul>
      <p>* Assistance in working with clients and processing orders.</p>
    </div>
  </section>
);

export default Work;
