import React from "react";
import ReactDOM from "react-dom";
import "focus-visible/dist/focus-visible";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/color-mode";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
