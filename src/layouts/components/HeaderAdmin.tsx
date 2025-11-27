import React from "react";
import { Link, Outlet } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <div>
      <h1>HeaderAdmin</h1>

      <header>
        <Link to={""}>Logo</Link>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/users"}>Quản lý user</Link>
            </li>
            <li>
              <Link to={"/categories"}>Quản lý danh mục</Link>
            </li>
            <li>
              <Link to={"/products"}>Quản lý sản phẩm</Link>
            </li>
            <li>
              <Link to={"/orders"}>Quản lý đơn đặt hàng</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderAdmin;
