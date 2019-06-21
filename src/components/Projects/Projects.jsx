import React from "react";

// styles
import s from "./projects.module.css";

// components
import Icon from "../../helpers/components/Icon";

const Projects = () => (
  <section className={s.section}>
    <h2 className={s.title}>
      <Icon name="projects" className={s.icon} size="30" color="#333333" />
      Project examples
    </h2>
    <ul className={s.list}>
      <li className={s.item}>
        <a
          className={s.link}
          href="https://github.com/MaximChernenko/allmusic-service"
          target="_blanck"
        >
          - Allmusic service
        </a>
      </li>
      <li className={s.item}>
        <a
          className={s.link}
          href="https://tic-tac-toe-applic.herokuapp.com/"
          target="_blanck"
        >
          - Tic-tac-toe
        </a>
      </li>
      <li className={s.item}>
        <a
          className={s.link}
          href="https://maximchernenko.github.io/creative/build/"
          target="_blanck"
        >
          - Creative (Landing Page)
        </a>
      </li>
    </ul>
  </section>
);

export default Projects;
