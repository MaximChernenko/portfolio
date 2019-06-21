import React from "react";

// styles
import s from "./soft-skills.module.css";

// components
import Skill from "../TechnicalSkills/Skill/Skill";
import Icon from "../../helpers/components/Icon";

const SoftSkills = ({ skills }) => (
  <section className={s.section}>
    <h2 className={s.title}>
      <Icon className={s.icon} name="soft-skills" color="#333333" size="30" />
      Soft Skills
    </h2>
    <ul className={s.list}>
      {skills.map(skill => (
        <li className={s.item} key={skill.id}>
          <Skill skill={skill} />
        </li>
      ))}
    </ul>
  </section>
);

export default SoftSkills;
