import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from "../pages/common/NotFoundPage";
import { RoleEnum } from "@/types/User";
import { clientRoutes } from "./client";
import authRoutes from "./auth";
import adminRoutes from "./admin";

const getRedirectPath = (user: { role: RoleEnum } | null) => {
  if (!user) return "/";
  switch (user.role) {
    case RoleEnum.SUPER_ADMIN:
      return "/super-admin/dashboard";
    case RoleEnum.ADMIN:
      return "/admin/dashboard";
    case RoleEnum.CLIENT:
      return "/";
    default:
      return "/login";
  }
};

const routes: RouteObject[] = [
  ...clientRoutes,
  {
    path: "/",
    element: JSON.parse(localStorage.getItem("user") || "null") && (
      <Navigate
        to={getRedirectPath(JSON.parse(localStorage.getItem("user") || "null"))}
        replace
      />
    ),
  },
  ...authRoutes,
  ...adminRoutes,
  { path: "*", element: <NotFoundPage /> },
];

const Routes = createBrowserRouter(routes);

export const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
};
