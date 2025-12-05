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

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const addCustomTodo = () => {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };

  return (
    <div className="app">
      <h1>Task Management App</h1>

      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <p>Expensive Value (useMemo): {expensiveValue}</p>

      <hr />

      <button onClick={addTodo}>Add Todo</button>

      <input
        value={input}
        placeholder="Enter custom task..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addCustomTodo}>Submit</button>

      <hr />

      <h3>Your Tasks:</h3>
      {todos.map((item, index) => (
        <TodoItem key={index} text={item} />
      ))}
    </div>
  );
};

export default App;
