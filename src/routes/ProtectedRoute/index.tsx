// the component that will protect our routes and prevent non-logged users from accessing pages (enter code).

import { FC } from "react";

import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isPublic?: boolean;
  isAuthorized: boolean;
}

const ProtectedRoute: FC<Props> = ({ isPublic, isAuthorized }) => {
  return isPublic || isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
