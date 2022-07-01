

import { useAuthCtx } from "Context/AuthContext";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
 const {isLoggedIn} =useAuthCtx()
  const location = useLocation();
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
