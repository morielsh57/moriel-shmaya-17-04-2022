import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { IWeatherReducerStateT } from "../reducers/reducer.interfaces";
import Header from "./header/header";
import "./layout.scss";
import "./layoutDark.scss";

const Layout: React.FC = (props) => {
  const isDarkMode = useSelector((store: IWeatherReducerStateT) => store.isDarkMode);

  return (
    <div className={`layout ${isDarkMode && "dark"}`}>
      <Header/>
      <Outlet />
    </div>
  );
}
export default Layout;