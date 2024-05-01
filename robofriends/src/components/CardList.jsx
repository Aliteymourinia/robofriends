import React from "react";
import Card from "./Card";
const CardList = ({ robots }) => {
  const CardArray = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });

  return <div className="cardlist-container ">{CardArray}</div>;
};
export default CardList;

/* for errorBoundary:
if (true) {
  throw new Error("nooooooooo");
} */
