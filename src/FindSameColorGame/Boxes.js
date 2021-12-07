import React from "react";

const Boxes = ({ backgroundColor, id, visible, handleBoxesOnClick }) => {
  const obj = {
    height: "10rem",
    backgroundColor: visible ? backgroundColor : "black",
    transition: "all 0.045s ease-in",
    transitionDelay: ".24s",
  };
  return (
    <div
      className={visible ? "animations" : ""}
      onClick={() => {
        handleBoxesOnClick(id, backgroundColor);
      }}
      key={id}
      style={obj}
    ></div>
  );
};
export default Boxes;
