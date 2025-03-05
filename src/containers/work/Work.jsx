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
          divClass={"one"}
          href={"/sparkshift"}
          img={SparkShift}
          imgClass={"img-one"}
          title={"SparkShift"}
        />
        <Project
          divClass={"two"}
          href={"/productivity"}
          img={Productivity}
          imgClass={"img-two"}
          title={"Productivity SaaS"}
        />
        <Project
          divClass={"three"}
          href={"/datafy"}
          img={Datafy}
          imgClass={"img-three"}
          title={"Datafy"}
        />
        <Project
          divClass={"four"}
          href={"/buggybugtracker"}
          img={Buggy}
          imgClass={"img-four"}
          title={"Buggy Bug Tracker"}
        />
        <Project
          divClass={"five"}
          href={"/skywind"}
          img={Skywind}
          imgClass={"img-five"}
          title={"Skywind"}
        />
        <Project
          divClass={"six"}
          href={"/tictactoe"}
          img={TicTacToe}
          imgClass={"img-six"}
          title={"Tic Tac Toe"}
        />
        {/* <Project
          divClass={"six"}
          href={"/todolist"}
          img={Todo}
          imgClass={"img-six"}
          title={"Todo List"}
        /> */}
        {/* <Project
          divClass={"five"}
          href={"/churchsite"}
          img={Church}
          imgClass={"img-five"}
          title={"Church Website"}
        /> */}
        {/* <Project
          divClass={"six"}
          href={"/workinprogress"}
          img={Extra}
          imgClass={"img-six"}
          title={"More on the Way"}
        /> */}
      </div>
    </div>
  );
};

export default Work;
