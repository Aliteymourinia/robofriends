import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "2px solid black ",
        height: "430px",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
