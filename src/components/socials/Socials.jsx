import React from "react";

const Socials = ({ href, img, imgClass }) => {
  return (
    <li className="footer__item-social">
      <a
        href={href}
        className="footer__social-link"
        aria-label="Footer social links"
      >
        <img src={img} alt="" className={`${imgClass} hover`}></img>
      </a>
    </li>
  );
};

export default Socials;
