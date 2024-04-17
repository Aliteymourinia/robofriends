import React from "react";
import "./index.css";
import { robots } from "./robots";
const Card = (props) => {
  return (
    <div className="text-black py-4">
      <div className=" bg-green-300 rounded-lg  hover:scale-110 transition-transform duration-200">
        <img alt="robot" src={props.src} />
        <h2>{props.name} </h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};
export default Card;
