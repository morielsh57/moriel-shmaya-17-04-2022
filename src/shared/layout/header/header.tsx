import React from "react";
import Navbar from "../navbar/navbar";

import "./header.scss";

const Header: React.FC = (props) => {

  return (
    <header>
      <div className="logo">
        {/* <img src={process.env.PUBLIC_URL + '/weather-logo.png'} alt="" /> */}
        Weather<span>Task</span>
        </div>
      <Navbar />
    </header>
  );
}
export default Header;