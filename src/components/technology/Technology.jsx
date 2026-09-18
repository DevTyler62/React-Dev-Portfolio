import React from "react";
import "./technology.css";
import OpenAIBlack from "../../assets/OpenAI-Blossom_Black.svg";
import OpenAIWhite from "../../assets/OpenAI-Blossom_White.svg";

const Technology = ({ technology }) => {
  const isOpenAI = technology === OpenAIBlack || technology === OpenAIWhite;
  return (
    <li className="technology__list-item">
      <img
        src={technology}
        alt=""
        className={`technology__item-img${isOpenAI ? " technology__item-img--openai" : ""}`}
      />
    </li>
  );
};

export default Technology;
