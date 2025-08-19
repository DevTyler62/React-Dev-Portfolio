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
  TailWind,
  Vercel,
  WVercel,
  TypeScript,
  Nextjs,
  WNextjs,
  Motion,
} from "./imports";
import { useState, useEffect } from "react";

function CheckProject({ projectTitle }) {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme")
  );

  useEffect(() => {
    const htmlEl = document.documentElement;

    // Callback for MutationObserver
    const observerCallback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          setTheme(htmlEl.getAttribute("data-theme"));
        }
      }
    };

    // Create observer
    const observer = new MutationObserver(observerCallback);

    // Start observing attribute changes on <html>
    observer.observe(htmlEl, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

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
  } else if (projectTitle === "Todo List") {
    return (
      <>
        <Technology technology={ReactJS} />
        <Technology technology={TailWind} />
        <Technology technology={Vercel} />
      </>
    );
  } else if (projectTitle === "Productivity SaaS") {
    if (theme === "dark") {
      // If dark theme is active, use white icon variants
      return (
        <>
          <Technology technology={WNextjs} />
          <Technology technology={TypeScript} />
          <Technology technology={TailWind} />
          <Technology technology={WVercel} />
        </>
      );
    } else {
      return (
        <>
          <Technology technology={Nextjs} />
          <Technology technology={TypeScript} />
          <Technology technology={TailWind} />
          <Technology technology={Vercel} />
        </>
      );
    }
  } else if (projectTitle === "Sparkshift") {
    if (theme === "dark") {
      // If dark theme is active, use white icon variants
      return (
        <>
          <Technology technology={WNextjs} />
          <Technology technology={TypeScript} />
          <Technology technology={TailWind} />
          <Technology technology={WVercel} />
        </>
      );
    } else {
      return (
        <>
          <Technology technology={Nextjs} />
          <Technology technology={TypeScript} />
          <Technology technology={TailWind} />
          <Technology technology={Vercel} />
        </>
      );
    }
  }
}

function CheckLiveSite({ projectTitle }) {
  if (projectTitle === "Skywind") {
    return (
      <>
        <a
          href="https://skywind.netlify.app/"
          target="_blank"
          className="button button__live"
        >
          Live Site
        </a>
      </>
    );
  } else if (projectTitle === "Tic Tac Toe") {
    return (
      <>
        <a
          href="https://tictactoe-code.netlify.app/"
          target="_blank"
          className="button button__live"
        >
          Live Site
        </a>
      </>
    );
  } else if (projectTitle === "Todo List") {
    return (
      <>
        <a
          href="https://todo-crud-app-tc.vercel.app/"
          target="_blank"
          className="button button__live"
        >
          Live Site
        </a>
      </>
    );
  } else if (projectTitle === "Productivity SaaS") {
    return (
      <>
        <a
          href="https://productivity-saas.vercel.app/"
          target="_blank"
          className="button button__live"
        >
          Live Site
        </a>
      </>
    );
  } else if (projectTitle === "Sparkshift") {
    return (
      <>
        <a
          href="https://spark-shift.vercel.app/"
          target="_blank"
          className="button button__live"
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
        <img
          src={projectImg}
          alt="project image"
          className="project__image-img"
        />
      </div>
      <div className="container technology">
        <h1 className="technology__title">Technologies Used</h1>
        <ul className="technology__list">
          <CheckProject projectTitle={projectTitle} />
        </ul>
      </div>
      <div className="container buttons">
        <a href={projectCode} target="_blank" className="button button__code">
          Code
        </a>
        <CheckLiveSite projectTitle={projectTitle} />
      </div>
      <div className="container project__description">
        <h1 className="description__title">Description</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
