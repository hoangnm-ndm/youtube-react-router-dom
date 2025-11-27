import { RouteObject } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import UserManagermentPage from "@/pages/admin/UserManagermentPage";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import { RoleEnum } from "@/types/User";

const adminRoutes: RouteObject[] = [
  // * SuperAdmin Routes
  {
    path: "/super-admin",
    element: (
      <ProtectedRoute allowedRoles={[RoleEnum.SUPER_ADMIN]}>
        <LayoutAdmin />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "users",
        element: <UserManagermentPage />,
      },

      // * Thêm các route khác dành cho SuperAdmin ở đây
    ],
  },

  // * Nếu dưới quyền super admin còn admin, manager... thì thêm các route ở đây:
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={[RoleEnum.ADMIN, RoleEnum.SUPER_ADMIN]}>
        <LayoutAdmin />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "users",
        element: <UserManagermentPage />,
      },
    ],
  },
];

export default adminRoutes;
