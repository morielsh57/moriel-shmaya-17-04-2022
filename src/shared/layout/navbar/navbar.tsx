import React from "react";
import { NavLink } from "react-router-dom";
import { FAVORITE_URL, HOME_URL } from "../../consts/url";

import "./navbar.css";

const Navbar: React.FC = () => {

  const setActiveClassName = (isActive:boolean) => {
    let activeClass = "";
    if(isActive) activeClass="active";
    return activeClass;
  }

  return (
      <nav>
        <NavLink to={HOME_URL} className={({isActive}) => setActiveClassName(isActive)}>Home</NavLink>
        <NavLink to={FAVORITE_URL} className={({isActive}) => setActiveClassName(isActive)}>Favorite</NavLink>
      </nav>
  );
}
export default Navbar;