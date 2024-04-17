import React from "react";
import "./index.css";
const Card = () => {
  return (
    <div className="text-black p-4">
      <div className=" bg-green-300 rounded-lg  hover:scale-110 transition-transform duration-200">
        <img alt="robot" src="https://robohash.org/test" />
        <h2>Jane Doe </h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
  );
};
export default Card;
