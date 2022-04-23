import React from "react";
import { Link } from "react-router-dom";
import { HOME_URL } from "../../consts/url";
import Navbar from "../navbar/navbar";
import SwitchModeToggle from "../switch/mode-toggle/switchModeToggle";

import "./header.scss";

const Header: React.FC = (props) => {

  return (
    <header>
      <div className="nav-mode-container">
        <Navbar />
        <SwitchModeToggle/>
      </div>
      <div className="logo">
       <Link to={HOME_URL}>Weather<span>Task</span></Link>
      </div>
    </header>
  );
}
export default Header;