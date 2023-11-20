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

   function handleResetTodos () {
    setTodos([]);
  };

function handleRemovedTodo (indexToRemove) {
  setTodos((prevTodos) => prevTodos.filter((todo, index) => {
    return (todo, index) !== indexToRemove;
  }));

}

  return (
    <div>
      <h2>TodoList</h2>
      <ul>
        {todos.map((todo, index) => (<li>{todo}<button onClick={() => handleRemovedTodo(index)}>Remove</button></li>))}
      </ul>
      <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)}/>
      <button onClick={handleAddTodo}>Click</button>
      <button onClick={handleResetTodos}>Reset</button>
    </div>
  );
}