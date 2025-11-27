import React from "react";
import { Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <div>
      <h1>LayoutAuth</h1>
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
