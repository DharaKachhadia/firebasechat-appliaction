import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a users" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="userChatInfo">
          <span>Dhara</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
