import React from "react";
const Card = () => {
  return (
    <div className="bg-green-300 text-black rounded-lg py-6 m-3">
      <img alt="robot" src="https://robohash.org/test" />
      <div>
        <h2>Jane Doe </h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
  );
};
export default Card;
