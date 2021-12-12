import React from "react";

const Todo = ({ taskObj, handleRemoveTodo }) => {
  return (
    <li>
      {" "}
      {taskObj.task} <button onClick={handleRemoveTodo}>X</button>{" "}
    </li>
  );
};
export default Todo;
