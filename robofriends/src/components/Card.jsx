import React from "react";
import "../index.css";

const Card = (props) => {
  const { name, email, id } = props; //destructuring of props (used to extract specific values from the props object and it makes the code more readable and clean. )
  return (
    <div className="card-container py-3">
      <div className="card bg-green-300 rounded-lg  hover:scale-105 transition-transform duration-200 flex flex-col items-center">
        <img
          className="size-60"
          alt="robot"
          src={`https://robohash.org/${id}`}
        />
        <h2 className="text-2xl">{name} </h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;

//note: we can merge the props object to card object to makes the code cleaner like this:
/*const Card = ({name, email, id}) => {
  return (
    <div className="text-black py-4">
      <div className=" bg-green-300 rounded-lg  hover:scale-110 transition-transform duration-200">
        <img alt="robot" src={`https://robohash.org/${id}`} />
        <h2>{name} </h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;*/
