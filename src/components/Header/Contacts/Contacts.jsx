import React from "react";

// styles
import s from "./contacts.module.css";

// components
import Contact from "./Contact/Contact";

const Contacts = ({ location, mobile, mail, github, linkedin, skype }) => (
  <ul>
    {location && (
      <li className={s.item}>
        <Contact
          name="location"
          content={location}
          href={`https://www.google.com/maps/d/embed?mid=1EMzI2Y1zb95XiXCCOz8yRBxrgCA&msa=0&ie=UTF8&t=h&ll=50.46275%2C30.55297900000005&spn=0.743067%2C2.650452&z=9&output=embed`}
          size="20"
        />
      </li>
    )}
    {mobile && (
      <li className={s.item}>
        <Contact
          name="mobile"
          content={mobile}
          href={`tel:${mobile}`}
          size="20"
        />
      </li>
    )}
    {github && (
      <li className={s.item}>
        <Contact name="github" content={github} href={github} size="20" />
      </li>
    )}
    {mail && (
      <li className={s.item}>
        <Contact name="mail" content={mail} href={`mailto:${mail}`} size="20" />
      </li>
    )}
    {linkedin && (
      <li className={s.item}>
        <Contact name="linkedin" content={linkedin} href={linkedin} size="20" />
      </li>
    )}
    {skype && (
      <li className={s.item}>
        <Contact
          name="skype"
          content={skype}
          href={`skype:${skype}?chat`}
          size="20"
        />
      </li>
    )}
  </ul>
);

export default Contacts;
