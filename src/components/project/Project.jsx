import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

const Project = ({ href, img, logoVariant = "icon", title }) => {
  return (
    <div className="work__content">
      <Link to={href} aria-label={title}>
        <div className="work__img">
          <img
            src={img}
            className={`work__img-img work__img-img--${logoVariant}`}
            alt={`${title} logo`}
          />
        </div>
        <h4 className="work__title">{title}</h4>
      </Link>
    </div>
  );
};

export default Project;
