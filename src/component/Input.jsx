import React from "react";
import attach from "../img/attach.png";
import img from "../img/img.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something..." />
      <div className="send">
        <img src={attach} alt="" />
        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button>send</button>
      </div>
    </div>
  );
};

export default Input;
