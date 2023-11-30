import { useState } from "react";

export function Counter({ startValue = 0, incrementValue }) {
  const [counter, setCounter] = useState(startValue);

  function handleIncrement() {
    setCounter((counter) => counter + incrementValue);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Click</button>
    </div>
  );
}
