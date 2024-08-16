import React, { useState } from "react";
import Logo from "../../assets/solid-orange.svg";
import NavLinks from "../../components/navLinks/NavLinks";
import Toggle from "../../components/toggle/Toggle";
import { HashLink } from "react-router-hash-link";
import "./header.css";

const Header = () => {
  const root = document.getElementsByTagName("html")[0];
  const [isDark, setIsDark] = useState(true);

  if (isDark === true) {
    root.setAttribute("data-theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
  }

  return (
    <div className="header">
      <header className="header" id="header">
        <nav className="nav container">
          <HashLink smooth to={"/"} className="nav__logo">
            <img src={Logo} alt="logo" className="nav__logo-img" />
          </HashLink>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <NavLinks
                id={1}
                liClass={"nav__item"}
                href={"/#home"}
                aClass={"nav__link"}
                text={"Home"}
              />
              <NavLinks
                id={2}
                liClass={"nav__item"}
                href={"/#about"}
                aClass={"nav__link"}
                text={"About"}
              />
              <NavLinks
                id={3}
                liClass={"nav__item"}
                href={"/#work"}
                aClass={"nav__link"}
                text={"Work"}
              />
              <NavLinks
                id={4}
                liClass={"nav__item"}
                href={"/#contact"}
                aClass={"nav__link"}
                text={"Contact"}
              />
            </ul>
            <div className="nav__close" id="nav-close">
              <i className="bx bx-x"></i>
            </div>
          </div>
          <div className="nav__btns">
            <Toggle
              isChecked={isDark}
              handleChange={() => setIsDark(!isDark)}
            />
            <div className="nav__toggle" id="nav-toggle">
              <i className="bx bx-menu-alt-right"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
