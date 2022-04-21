import React from "react";
import Navbar from "../navbar/navbar";

import "./header.scss";

const Header: React.FC = (props) => {

  return (
    <header>
      <Navbar />
      <div className="logo">
        Weather<span>Task</span>
      </div>
    </header>
  );
}
export default Header;