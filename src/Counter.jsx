import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ startValue = 0, incrementValue, decrementValue}) {
  const [counter, setCounter] = useState(startValue);

  function handleIncrement() {
    setCounter((counter) => counter + incrementValue);
  }

  function handleDecrement() {
    setCounter((counter) => counter - decrementValue);
  }

  function handleReset() {
    setCounter(startValue);
  }

  return (
    <CounterDisplay
  counter={counter}
  handleIncrement={handleIncrement}
  handleDecrement={handleDecrement}
  handleReset={handleReset}/>
  );
}


