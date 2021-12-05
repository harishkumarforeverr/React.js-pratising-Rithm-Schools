import React from "react";

const Refs = () => {
  let inputValue = "";
  return (
    <div>
      <h1> Refes </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputValue);
        }}
      >
        <input
          type="text"
          ref={(input) => {
            debugger;
            inputValue = input;
            console.log("woeooe");
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Refs;
