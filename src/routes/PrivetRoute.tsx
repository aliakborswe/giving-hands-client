import useAuth from "@/hooks/useAuth";
import Spinner from "@/pages/common/Spinner";
import { Navigate, Outlet, useLocation } from "react-router";


interface PrivateRouteProps {
  isAuthenticated: boolean;
  redirectPath?: string;
}

const PrivetRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  redirectPath = "/login",
}) => {
  const { loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={redirectPath} state={{ from: location }} replace />
  );
};

export default PrivetRoute;
