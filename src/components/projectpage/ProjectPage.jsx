import React from "react";
import { HashLink } from "react-router-hash-link";
import "./projectPage.css";
import Technology from "../technology/Technology";
import {
  CSS,
  Heroku,
  Hostinger,
  HTML,
  JavaScript,
  MYSQL,
  PHP,
  ReactJS,
  Sass,
} from "./imports";

function CheckProject({ projectTitle }) {
  if (projectTitle === "Buggy Bug Tracker") {
    return (
      <>
        <Technology technology={HTML} />
        <Technology technology={CSS} />
        <Technology technology={JavaScript} />
        <Technology technology={PHP} />
        <Technology technology={MYSQL} />
        <Technology technology={Hostinger} />
      </>
    );
  } else if (projectTitle === "Datafy") {
    return (
      <>
        <Technology technology={HTML} />
        <Technology technology={CSS} />
        <Technology technology={ReactJS} />
        <Technology technology={Heroku} />
      </>
    );
  } else if (projectTitle === "Skywind") {
    return (
      <>
        <Technology technology={HTML} />
        <Technology technology={CSS} />
        <Technology technology={JavaScript} />
      </>
    );
  } else if (projectTitle === "Tic Tac Toe") {
    return (
      <>
        <Technology technology={HTML} />
        <Technology technology={CSS} />
        <Technology technology={JavaScript} />
      </>
    );
  } else if (projectTitle === "Church Website") {
    return (
      <>
        <Technology technology={HTML} />
        <Technology technology={Sass} />
        <Technology technology={JavaScript} />
        <Technology technology={PHP} />
      </>
    );
  }
}

function CheckLiveSite({ projectTitle }) {
  if (projectTitle === "Skywind") {
    return (
      <>
        <a href="https://skywind.netlify.app/" class="button button__live">
          Live Site
        </a>
      </>
    );
  } else if (projectTitle === "Tic Tac Toe") {
    return (
      <>
        <a
          href="https://tictactoe-code.netlify.app/"
          class="button button__live"
        >
          Live Site
        </a>
      </>
    );
  } else {
    return null;
  }
}

const ProjectPage = ({
  projectTitle,
  projectImg,
  projectCode,
  description,
}) => {
  return (
    <div className="project_page">
      <div className="container back__arrow">
        <HashLink smooth to="/">
          <i className="bx bx-arrow-back back__arrow-icon"></i>
        </HashLink>
      </div>
      <div className="container project__title">
        <h1 className="project__title-title">{projectTitle}</h1>
      </div>
      <div className="container project__image">
        <img src={projectImg} alt="" class="project__image-img" />
      </div>
      <div class="container technology">
        <h1 class="technology__title">Technologies Used</h1>
        <ul class="technology__list">
          <CheckProject projectTitle={projectTitle} />
        </ul>
      </div>
      <div class="container buttons">
        <a href={projectCode} class="button button__code">
          Code
        </a>
        <CheckLiveSite projectTitle={projectTitle} />
      </div>
      <div class="container project__description">
        <h1 class="description__title">Description</h1>
        <p class="description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
