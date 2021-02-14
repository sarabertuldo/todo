import React from "react";

// create display component
const TodoDisplay = (props) => {
  // let todo = props.todo;
  return (
    <li>
      {props.todo.name} - {props.todo.title}
    </li>
  );
};

export default TodoDisplay;
