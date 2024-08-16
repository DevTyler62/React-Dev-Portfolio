import React from "react";
import "./technology.css";

const Technology = ({ technology }) => {
  return (
    <>
      <li class="technology__list-item">
        <img src={technology} alt="" class="technology__item-img" />
      </li>
    </>
  );
};

export default Technology;
