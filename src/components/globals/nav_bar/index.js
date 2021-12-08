import React from "react";
import CurrentTime from "../current_time";
import Metamask from "./metamask_login";

const NavBar = () => {
  return (
    <div>
      Cryminals
      <CurrentTime />
      <Metamask /> 
    </div>
  );
};

export default NavBar;
