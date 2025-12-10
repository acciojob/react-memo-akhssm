import React from "react";

const TodoItem = ({ text }) => {
  console.log("Rendering:", text);
  return <li>{text}</li>; 
};

export default React.memo(TodoItem);
