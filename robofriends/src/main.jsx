import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "tachyons";
import Hello from "./Hello.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Hello greeting={"Hello " + "react ninja"} />
);
