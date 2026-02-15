import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RoleProtectedRoute = ({ children, allowedRoles }) => {
  const { user, token } = useSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default RoleProtectedRoute;
