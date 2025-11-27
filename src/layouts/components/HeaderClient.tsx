import React from "react";
import { Link } from "react-router-dom";

const HeaderClient = () => {
  return (
    <header>
      <Link to={""}>Logo</Link>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/Login"}>Login</Link>
          </li>
          <li>
            <Link to={"/Register"}>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderClient;
