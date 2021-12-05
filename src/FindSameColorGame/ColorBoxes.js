import React from "react";
import Boxes from "./Boxes";

const ColorBoxes = ({ colorBoxes, handleBoxesOnClick } = {}) => {
  return (
    <div className="ColorBoxes">
      <h1> Enjoy the Game </h1>
      <div className="grid">
        {colorBoxes.map(({ ...Objvalues }, i) => {
          return (
            <Boxes
              handleBoxesOnClick={handleBoxesOnClick}
              {...Objvalues}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ColorBoxes;
