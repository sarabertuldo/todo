import React, { useState } from "react";
import TodoDisplay from "./TodoDisplay";

const Todo = (props) => {
  // let title = "Add to the array";
  // props are static and state might change
  // can be state > props > props
  // state is the parent/top
  const [title, setTitle] = useState("Add to the array");
  // let username = "Sara";
  const [name, setName] = useState("Mike");
  const [todos, setTodos] = useState([
    { id: 1, name: "Hector", title: "Walk the dog" },
    { id: 2, name: "Tina", title: "Water the plants" },
    { id: 3, name: "Derek", title: "Wash the dishes" },
    { id: 4, name: "Linda", title: "Fold the laundry" },
    { id: 5, name: "Terrence", title: "Prepare dinner" },
    { id: 6, name: "Julie", title: "Pick up kids from school" },
  ]);

  const [id, setId] = useState(7);
  // const [otherState, setOtherState] = useState(12)
  return (
    <>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      {title.length < 3 && <p>Username must be 3 or more characters</p>}
      <label htmlFor="username"> Username</label>
      <input
        id="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="John Smith"
      />
      <p>
        {name} - {title}
      </p>
      {/* Click Event to the button that adds to the todos array {id: 7, title and username} */}
      <button
        onClick={() => {
          // button onClick() is empty because we don't need the information within the button
          // as opposed to rock, paper, scissors button
          // add a todo object to todos state
          let newTodo = {
            id,
            title,
            name,
          };
          console.log(newTodo);
          // take everything from todos and unpack in newTodo
          // use spread operator ... returns everything in between
          setTodos([...todos, newTodo]);
          // reset name and title
          // to hold onto an old value
          // setTodos{(oldTodoState/oldState) => {
          //   console.log(oldState);
          //   return[...todos, newTodo];
          setName("");
          setTitle("");

          // increment id by 1
          // cannot use id++ because JavaScript we're not trying to change the value of "id"
          setId(id + 1);
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.length > 0 &&
          todos.map((t) => <TodoDisplay todo={t} key={t.id} />)}
      </ul>
      {/* letter inside of the () is arbitrary but usually starts with the letter of the keyword
          doing todos.map((todo) => <TodoDisplay todo{t} key={todos.id} would be confusing*/}
    </>
  );
};

export default Todo;
