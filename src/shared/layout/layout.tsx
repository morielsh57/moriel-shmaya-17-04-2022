import React from "react";
import { Outlet } from "react-router";

const Layout: React.FC = (props) => {

  return (
    <>
      header
      <Outlet />
    </>
  );
}
export default Layout;