import { Outlet } from "react-router-dom";
import FooterClient from "./components/FooterClient";
import HeaderClient from "./components/HeaderClient";

const LayoutClient = () => {
  return (
    <div>
      <h1>LayoutClient</h1>
      <HeaderClient />
      <Outlet />
      <FooterClient />
    </div>
  );
};

export default LayoutClient;
