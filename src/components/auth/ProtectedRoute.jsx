import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  // 1. If not logged in, send to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. If logged in but role isn't allowed, send to home (or a 403 page)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // 3. Authorized! Show the page
  return children;
};

export default ProtectedRoute;
