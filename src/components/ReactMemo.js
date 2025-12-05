import React from "react";

const TodoItem = ({ text }) => {
  console.log("Rendering:", text);
  return <li>{text}</li>; // Changed to <li> for semantic list
};

export default React.memo(TodoItem);
