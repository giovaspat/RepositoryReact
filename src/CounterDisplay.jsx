
export function CounterDisplay({counter, handleIncrement, handleDecrement, handleReset}) {
  const startValue = counter;

  return (
    <div>
      <h2>{startValue}</h2>
      <button onClick={handleIncrement}>Click for Increment</button>
      <button onClick={handleDecrement}>Click for Decrement</button>
      <button onClick={handleReset}>Click for Reset</button>
    </div>
  );
}
