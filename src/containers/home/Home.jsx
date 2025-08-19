import React from "react";
import HomeImg from "../../assets/header.png";
import "./home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h2 className="home__title">
            Hello &#128075;, I'm <span className="tyler">Tyler.</span> <br />I
            am a Full Stack <br></br>Software Engineer.
          </h2>
          <h3 className="home__description">
            I take ideas from concept to reality.
          </h3>
          <a href="#work" className="button home__button">
            View my work<i className="bx bx-right-arrow-alt button__icon"></i>
          </a>
        </div>
        <div className="home__img">
          <img src={HomeImg} alt="" className="home__img-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
