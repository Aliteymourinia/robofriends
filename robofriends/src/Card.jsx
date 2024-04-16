import React from "react";
import "./index.css";
const Card = () => {
  return (
    <div className="card-container my-2 text-black">
      <div className=" bg-green-300 rounded-lg grow">
        <img alt="robot" src="https://robohash.org/test" />
        <h2>Jane Doe </h2>
        <p>jane.doe@gmail.com</p>
      </div>
      <div className="bg-green-300 rounded-lg grow">
        <img alt="robot" src="https://robohash.org/2" />
        <h2>Jane Doe </h2>
        <p>jane.doe@gmail.com</p>
      </div>
      <div className="bg-green-300 rounded-lg grow">
        <img alt="robot" src="https://robohash.org/4" />
        <h2>Jane Doe </h2>
        <p>jane.doe@gmail.com</p>
      </div>
      <div className="bg-green-300 rounded-lg grow">
        <img alt="robot" src="https://robohash.org/5" />
        <h2>Jane Doe </h2>
        <p>jane.doe@gmail.com</p>
      </div>
      <div className="bg-green-300 rounded-lg grow">
        <img alt="robot" src="https://robohash.org/8" />
        <h2>Jane Doe </h2>
        <p>jane.doe@gmail.com</p>
      </div>
      <div className="bg-green-300 rounded-lg grow">
        <img alt="robot" src="https://robohash.org/6" />
        <h2>Jane Doe </h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
  );
};
export default Card;
