import React from "react";
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
        Weather<span>Task</span>
      </div>
    </header>
  );
}
export default Header;