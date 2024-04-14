import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tachyons";
import Hello from "./Hello.jsx";
import Ali from "./Ali.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Hello greeting={"Hello " + "react ninja"} />
    <Ali text={"ali"} />
  </div>
);
