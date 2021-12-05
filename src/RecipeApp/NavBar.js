import React from "react";

const NavBar = ({ handleisFormVisible }) => {
  return (
    <div className="navbar">
      <div>
        <button
          onClick={() => {
            handleisFormVisible(true);
          }}
        >
          {" "}
          Create New Dog{" "}
        </button>
      </div>
    </div>
  );
};
export default NavBar;
