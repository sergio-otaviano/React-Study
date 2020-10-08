import React from "react";
import ReactDOM from "react-dom";

import BinarySearchApp from "./Component/BinarySearchApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BinarySearchApp />
  </React.StrictMode>,
  rootElement
);
