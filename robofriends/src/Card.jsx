import React from "react";
const Card = () => {
  return (
    <div className="w-52 bg-green-300 text-black rounded-lg py-6 m-3 ">
      <img alt="robot" src="https://robohash.org/test" />
      <div>
        <h2 className="font-bold text-lg">Jane Doe </h2>
        <p className="text-sm">jane.doe@gmail.com</p>
      </div>
    </div>
  );
};
export default Card;
