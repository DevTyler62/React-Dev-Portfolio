import React from "react";
import { HashLink } from "react-router-hash-link";
import "./navlinks.css";

const NavLinks = ({ liClass, id, href, aClass, text }) => {
  return (
    <li id={id} className={liClass}>
      <HashLink
        smooth
        to={href}
        className={aClass}
        aria-label={`Navaigation button for ${text}`}
      >
        {text}
      </HashLink>
    </li>
  );
};

export default NavLinks;
