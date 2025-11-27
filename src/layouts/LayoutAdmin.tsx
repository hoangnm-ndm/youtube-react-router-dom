import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "./components/HeaderAdmin";
import FooterAdmin from "./components/FooterAdmin";

const LayoutAdmin = () => {
  return (
    <div>
      <h1>LayoutAdmin</h1>
      <HeaderAdmin />
      <Outlet />
      <FooterAdmin />
    </div>
  );
};

export default LayoutAdmin;
