import React from "react";

// styles
import s from "./header.module.css";

// img
import avatar from "../../img/photo.jpg";

// components
import Avatar from "./Avatar/Avatar";
import Name from "./Name/Name";
import Contacts from "./Contacts/Contacts";

const Header = () => (
  <header className={s.header}>
    <Avatar src={avatar} alt="avatar" />
    <div className={s.groupper}>
      <Name name="Maksym" surname="Chernenko" />
      <Contacts
        mail="chernenko.maxim.14@gmail.com"
        mobile="+380663529389"
        skype="chernenko.maksym.14"
        location="Kiev, Urkaine"
        github="https://github.com/MaximChernenko"
        linkedin="https://www.linkedin.com/in/maksym-chernenko"
      />
    </div>
  </header>
);

export default Header;
