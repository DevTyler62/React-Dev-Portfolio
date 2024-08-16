import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

const Project = ({ divClass, href, img, imgClass, title }) => {
  return (
    <div className={`work__content ${divClass}`}>
      <Link to={href}>
        <div className="work__img">
          <img
            src={img}
            className={`work__img-img ${imgClass}`}
            alt="project"
          />
        </div>
        <h4 className="work__title">{title}</h4>
      </Link>
    </div>
  );
};

export default Project;
