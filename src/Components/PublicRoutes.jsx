/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function PublicRoutes({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PublicRoutes;