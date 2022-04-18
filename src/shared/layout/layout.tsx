import React from "react";
import { Outlet } from "react-router";
import Header from "./header/header";

const Layout: React.FC = (props) => {

  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
}
export default Layout;