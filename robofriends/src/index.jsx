import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CardList from "./CardList";
import { robots } from "./robots";
ReactDOM.createRoot(document.getElementById("root")).render(
  <CardList robots={robots} />
);
