import React, { useState, useEffect, useMemo } from "react";
import "../styles/App.css";
import TodoItem from "./ReactMemo";
import ExpensiveCalculation from "./UseMemo";

const App = () => {
  const [todos, setTodos] = useState(["Learn React", "Understand Memo"]);
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  const expensiveValue = useMemo(() => ExpensiveCalculation(counter), [counter]);

  const addTodo = () => setTodos([...todos, "New todo"]);

  const addCustomTodo = () => {
    if (input.length > 0) {     
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div className="app">
      <h1>Task Management App</h1>

      <h3>Counter: {counter}</h3>
      <button id="increment" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>

      <p>Expensive Value (useMemo): {expensiveValue}</p>

      <hr />

      <button id="add-todo" onClick={addTodo}>Add Todo</button>

      <input
        id="skill-input"
        type="text"
        value={input}
        placeholder="Enter custom task..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button id="submit-skill" onClick={addCustomTodo}>Submit</button>

      <hr />

      <h3>Your Tasks:</h3>
      <ul>
        {todos.map((item, index) => (
          <TodoItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;
