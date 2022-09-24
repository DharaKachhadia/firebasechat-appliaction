import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="form-container">
      <div className="fromWrapper">
        <span className="logo">Dhara chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {/* ------------------------------------- */}

          {/* if you want to file open then you can write 
          same as over blew but you don't want to it then 
          you can write display:none and then give id and 
          use for that to other you can use htmlFor and give
           id of that so like   htmlFor="file"*/}
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span> Add profile </span>
          </label>

          {/* ------------------------------------- */}
          <button>Sign Up</button>
        </form>
        <p>You do have an account ? Login</p>
      </div>
    </div>
  );
};

export default Register;
