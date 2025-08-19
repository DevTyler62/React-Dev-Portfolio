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
            I am located with the Greater Philadelphia, PA area. My tech stack
            is with the JavaScript family of languages and frameworks with more
            of a emphasis on the Frontend side. Though I am always excited to
            experiment and try new things. My passion for technology goes beyond
            the product. As I try to discover the ways in which software blends
            into our daily lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
