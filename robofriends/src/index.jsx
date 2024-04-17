import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import Card from "./Card";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="card-container">
    <Card src="https://robohash.org/1"/>
    <Card src="https://robohash.org/2" />
    <Card src="https://robohash.org/9"/>
    <Card src="https://robohash.org/8"/>
    <Card src="https://robohash.org/5"/>
    <Card src="https://robohash.org/6"/>
  </div>
);
