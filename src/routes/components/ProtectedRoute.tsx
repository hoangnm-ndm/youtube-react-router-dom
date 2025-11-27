import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { RoleEnum } from "@/types/User";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: RoleEnum[];
}

function isTokenExpired(token?: string | null): boolean {
  if (!token) return true;
  try {
    const decoded: any = jwtDecode(token);

    // Nếu token không có exp thì coi như hết hạn
    if (!decoded.exp) return true;
    const now = Date.now() / 1000;
    return decoded.exp < now;
  } catch {
    return true;
  }
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  // * Lấy thông tin user và accessToken từ localStorage (khi dùng cookie thì sẽ khác)
  const user: any = JSON.parse(localStorage.getItem("user") || "null");
  const accessToken = localStorage.getItem("accessToken");

  // * Nếu chưa đăng nhập, không có accessToken, accessToken hết hạn hoặc role không hợp lệ
  if (
    !user ||
    !accessToken ||
    isTokenExpired(accessToken) ||
    !allowedRoles.includes(user.role)
  ) {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
