import React from "react";

// svg sprite
import Icons from "../../icons/sprite.svg";

const Icon = ({ name, color, size, className }) => (
  <svg className={className} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);

export default Icon;
