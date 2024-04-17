import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Card";
import { robots } from "./robots";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="card-container">
    <Card
      id={robots[0].id}
      name={robots[0].name}
      email={robots[0].email}
      src="https://robohash.org/1"
    />
    <Card
      id={robots[1].id}
      name={robots[1].name}
      email={robots[1].email}
      src="https://robohash.org/2"
    />
    <Card
      id={robots[2].id}
      name={robots[2].name}
      email={robots[2].email}
      src="https://robohash.org/8"
    />
    <Card
      id={robots[3].id}
      name={robots[3].name}
      email={robots[3].email}
      src="https://robohash.org/5"
    />
    <Card
      id={robots[4].id}
      name={robots[4].name}
      email={robots[4].email}
      src="https://robohash.org/14"
    />
    <Card
      id={robots[5].id}
      name={robots[5].name}
      email={robots[5].email}
      src="https://robohash.org/9"
    />
  </div>
);
