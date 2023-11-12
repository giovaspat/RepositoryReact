import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ startValue = 0 }) {
  const [counter, setCounter] = useState(startValue);

  function handleIncrement() {
    setCounter((counter) => counter + 1);
  }

  function handleDecrement() {
    setCounter((counter) => counter - 3);
  }

  function handleReset() {
    setCounter(startValue);
  }

  return (
    <CounterDisplay counter={counter} handleIncrement={() => handleIncrement(counter + 1)}
      handleDecrement={handleDecrement} handleReset={handleReset}
    />
  );
}


