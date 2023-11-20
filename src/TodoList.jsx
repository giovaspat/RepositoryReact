import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleAddTodo () {
    if (newTodo !== "") {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodo("");
    }
  }

    const handleResetTodos = () => {
    setTodos([]);
  };



  return (
    <div>
      <h2>TodoList</h2>
      <ul>
        {todos.map((todo) => (<li>{todo}</li>))}
      </ul>
      <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)}/>
      <button onClick={handleAddTodo}>Click</button>
      <button onClick={handleResetTodos}>Reset</button>
    </div>
  );
}