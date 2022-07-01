import { useAuthCtx } from "Context/AuthContext";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RedirectRoute = () => {
 const {isLoggedIn} = useAuthCtx();
  const location = useLocation();
  return isLoggedIn ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default RedirectRoute;
