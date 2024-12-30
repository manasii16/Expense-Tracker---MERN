import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

const AuthRoute = ({ children }) => {
  const token = getUserFromStorage();
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};

export default AuthRoute;
