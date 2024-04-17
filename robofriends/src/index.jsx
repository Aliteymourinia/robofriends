import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import Card from "./Card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="card-container">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);
