import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FAVORITE_URL, HOME_URL } from "../../consts/url";
import { IWeatherReducerStateT } from "../../reducers/reducer.interfaces";

import "./navbar.scss";
import "./navbarDark.scss";

const Navbar: React.FC = () => {
  const isDarkMode = useSelector((store: IWeatherReducerStateT) => store.isDarkMode);

  const setActiveClassName = (isActive:boolean) => {
    let activeClass = "";
    if(isActive) activeClass="active";
    return activeClass;
  }

  return (
      <nav className={`${isDarkMode && "dark"}`}>
        <NavLink to={HOME_URL} className={({isActive}) => setActiveClassName(isActive)}>Home</NavLink>
        <NavLink to={FAVORITE_URL} className={({isActive}) => setActiveClassName(isActive)}>Favorite</NavLink>
      </nav>
  );
}
export default Navbar;