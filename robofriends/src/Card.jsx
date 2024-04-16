import React from "react";
import "./index.css";
const Card = () => {
  return (
    <div className="card-container">
      <div>
        <img alt="robot" src="https://robohash.org/test" />
        <h2>Jane Doe </h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
  );
};
export default Card;
