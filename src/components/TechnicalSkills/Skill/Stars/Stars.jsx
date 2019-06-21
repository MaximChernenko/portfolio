import React from "react";

// styles
import s from "./stars.module.css";
// components
import Icon from "../../../../helpers/components/Icon";

const Stars = ({ rate }) => (
  <ul className={s.list}>
    {rate.map(rate => (
      <li key={rate}>
        <Icon name="star" color="#333333" size="16" />
      </li>
    ))}
  </ul>
);

export default Stars;
