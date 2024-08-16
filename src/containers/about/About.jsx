import React from "react";
import AboutImg from "../../assets/about.png";
import "./about.css";

const About = () => {
  return (
    <div className="about section container" id="about">
      <h2 className="section__title">ABOUT ME</h2>
      <div className="about__container grid">
        <div className="about__img">
          <img src={AboutImg} alt="about" className="about__img-img" />
        </div>
        <div className="about__content">
          <p className="about__description">
            Developer who's passion for technology goes beyond the product.
            Trying to discover the ways in which software blends into our daily
            lives. Even though my formal education may be over the learning
            journey is never over.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
