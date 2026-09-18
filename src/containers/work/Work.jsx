import React from "react";
import { Project } from "../../components/export-components";
import {
  Buggy,
  Datafy,
  Church,
  Skywind,
  TicTacToe,
  Todo,
  Extra,
  Productivity,
  SparkShift,
} from "./imports";
import "./work.css";

const Work = () => {
  return (
    <div className="work section container" id="work">
      <h2 className="section__title">MY WORK</h2>
      <h3 className="work__subtitle">
        Here are some of the projects I have worked on.
      </h3>
      <div className="work__container grid">
        <Project
          href={"/churchsite"}
          img={Church}
          title={"Church Website"}
        />
        <Project
          href={"/sparkshift"}
          img={SparkShift}
          logoVariant="wordmark"
          title={"SparkShift"}
        />
        <Project
          href={"/productivity"}
          img={Productivity}
          title={"Productivity SaaS"}
        />
        <Project
          href={"/datafy"}
          img={Datafy}
          title={"Datafy"}
        />
        <Project
          href={"/buggybugtracker"}
          img={Buggy}
          title={"Buggy Bug Tracker"}
        />
        {/* <Project
          href={"/skywind"}
          img={Skywind}
          title={"Skywind"}
        /> */}
        <Project
          href={"/tictactoe"}
          img={TicTacToe}
          title={"Tic Tac Toe"}
        />
        {/* <Project
          href={"/todolist"}
          img={Todo}
          title={"Todo List"}
        /> */}
        {/* <Project
          href={"/workinprogress"}
          img={Extra}
          title={"More on the Way"}
        /> */}
      </div>
    </div>
  );
};

export default Work;
