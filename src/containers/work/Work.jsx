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
          href={"/productivity"}
          img={Productivity}
          imgClass={"img-one"}
          title={"Productivity SaaS"}
        />
        <Project
          divClass={"two"}
          href={"/datafy"}
          img={Datafy}
          imgClass={"img-two"}
          title={"Datafy"}
        />
        <Project
          divClass={"three"}
          href={"/buggybugtracker"}
          img={Buggy}
          imgClass={"img-three"}
          title={"Buggy Bug Tracker"}
        />
        <Project
          divClass={"four"}
          href={"/skywind"}
          img={Skywind}
          imgClass={"img-four"}
          title={"Skywind"}
        />
        <Project
          divClass={"five"}
          href={"/tictactoe"}
          img={TicTacToe}
          imgClass={"img-five"}
          title={"Tic Tac Toe"}
        />
        <Project
          divClass={"six"}
          href={"/todolist"}
          img={Todo}
          imgClass={"img-six"}
          title={"Todo List"}
        />
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
