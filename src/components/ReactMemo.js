import React from "react";

const TodoItem = ({ text }) => {
  console.log("Rendering:", text);
  return <p>{text}</p>;
};

export default React.memo(TodoItem);
