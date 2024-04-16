import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Card";
import "tachyons";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container">
    <Card />
    <Card />
    <Card />
  </div>
);
