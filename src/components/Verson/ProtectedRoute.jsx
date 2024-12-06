import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // Replace this logic with your authentication check
  const isAuthenticated = localStorage.getItem("isAdmin"); // Example: check if admin key exists
  return isAuthenticated === false ? <Navigate to="/" /> : children;
};

export default ProtectedRoute;
