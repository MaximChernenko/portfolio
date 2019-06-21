import React from "react";

// styles
import s from "./contact.module.css";

// components
import Icon from "../../../../helpers/components/Icon";

const Contact = ({ href, name, size, content }) => (
  <a className={s.link} href={href} target="_blanck">
    <Icon className={s.icon} name={name} size={size} color="#ffffff" />
    {content}
  </a>
);

export default Contact;
