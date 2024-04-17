import React from "react";
import "./index.css";
const Card = (props) => {
  return (
    <div className="text-black p-4">
      <div className=" bg-green-300 rounded-lg  hover:scale-110 transition-transform duration-200">
        <img alt="robot" src={props.src} />
        <h2>{} </h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
  );
};
export default Card;
