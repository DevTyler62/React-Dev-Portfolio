import React from "react";
import { Project } from "../../components/export-components";
import { Buggy, Datafy, Church, Skywind, TicTacToe, Extra } from "./imports";
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
          href={"/buggybugtracker"}
          img={Buggy}
          imgClass={"img-one"}
          title={"Buggy Bug Tracker"}
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
          href={"/skywind"}
          img={Skywind}
          imgClass={"img-three"}
          title={"Skywind"}
        />
        <Project
          divClass={"four"}
          href={"/tictactoe"}
          img={TicTacToe}
          imgClass={"img-four"}
          title={"Tic Tac Toe"}
        />
        <Project
          divClass={"five"}
          href={"/churchsite"}
          img={Church}
          imgClass={"img-five"}
          title={"Church Website"}
        />
        <Project
          divClass={"six"}
          href={"/workinprogress"}
          img={Extra}
          imgClass={"img-six"}
          title={"More on the Way"}
        />
      </div>
    </div>
  );
};

export default Work;
