import React from "react";
import Link from "../../components/navLinks/NavLinks";
import { Github, Instagram, LinkedIn, Youtube } from "./imports";
import { Socials } from "../../components/export-components";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <ul className="footer__links">
          <Link
            id={1}
            liClass={"footer__item"}
            href={"/#home"}
            aClass={"footer__link"}
            text={"Home"}
          />
          <Link
            id={2}
            liClass={"footer__item"}
            href={"/#about"}
            aClass={"footer__link"}
            text={"About"}
          />
          <Link
            id={3}
            liClass={"footer__item"}
            href={"/#work"}
            aClass={"footer__link"}
            text={"Work"}
          />
          <Link
            id={4}
            liClass={"footer__item"}
            href={"/#contact"}
            aClass={"footer__link"}
            text={"Contact"}
          />
        </ul>
        <ul className="footer__socials">
          <Socials
            href={"https://github.com/DevTyler62"}
            img={Github}
            imgClass={"filter-github"}
          />
          <Socials
            href={"https://www.instagram.com/tylerstechspace/"}
            img={Instagram}
            imgClass={"filter-instagram"}
          />
          <Socials
            href={"https://www.linkedin.com/in/tyler-smith-121205196/"}
            img={LinkedIn}
            imgClass={"filter-linkedin"}
          />
          <Socials
            href={"https://www.youtube.com/@tyler_tech_"}
            img={Youtube}
            imgClass={"filter-youtube"}
          />
        </ul>
      </div>
      <span className="footer__madeby">
        Made by Tyler_Codes
        <br />
      </span>
      <span className="footer__copy">
        &#169; TylerCodes. All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
