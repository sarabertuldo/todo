import logo from "./logo.svg";
import "./App.css";
import TodoDisplay from "./components/TodoDisplay";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <TodoDisplay />
      <Todo />
    </div>
  );
}

export default App;

// todo form / input - logical component
// array of todos
// display array - display component for todo
