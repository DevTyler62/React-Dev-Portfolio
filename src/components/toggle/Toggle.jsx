import React from "react";
import "./toggle.css";

const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="button__theme">
      <div className="onoffswitch">
        <input
          onChange={handleChange}
          type="checkbox"
          name="onoffswitch"
          className="onoffswitch-checkbox"
          id="myonoffswitch"
          tabIndex="0"
          checked={isChecked}
        ></input>
        <label className="onoffswitch-label" htmlFor="myonoffswitch">
          <span className="onoffswitch-inner"></span>
          <span className="onoffswitch-switch"></span>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
