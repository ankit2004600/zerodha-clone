import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  const username = localStorage.getItem("username");
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>
     <h3>
      Welcome, {username}
     </h3>
      <Menu />
     

<button
  onClick={() => {

    localStorage.removeItem("token");

    window.location.href =
      "http://localhost:3000/login";

  }}
>
  Logout
</button>
    </div>
  );
};

export default TopBar;