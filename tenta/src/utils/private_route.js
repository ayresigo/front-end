import React from "react";
import Play from "../pages/play";

const PrivateRoute = ({ children, ...rest }) => {
  //   let auth = true;
  //   const _api = new api();
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     try {
  //       _api.checkToken(token);
  //       auth = true;
  //     } catch (err) {
  //       auth = false;
  //     }
  //   } else {
  //     auth = false;
  //   }
  // return auth ? <Play /> : <Navigate to="/" />;
  return <Play>{children}</Play>;
};

export default PrivateRoute;
