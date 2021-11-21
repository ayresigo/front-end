import React from "react";
import { Navigate } from "react-router";
import Play from "../pages/play";
import api from "./api";

const PrivateRoute = ({ children, ...rest }) => {
  let auth = true;
  const _api = new api();
  let token = localStorage.getItem("token");
  if (token) {
    try {
      _api.checkToken(token);
      auth = true;
    } catch (err) {
      auth = false;
    }
  } else {
    auth = false;
  }
  return auth ? <Play /> : <Navigate to="/" />;
};

export default PrivateRoute;
