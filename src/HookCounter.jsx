import { useCounter } from "./UseCounter"

export function HookCounter ({startValue = 0}) {
  const{counter, onIncrease, onDecrease, onReset} = useCounter(startValue)

return (
  <div>
    <h2>{counter}</h2>
    <button onClick={onIncrease}>Increase</button>
    <button onClick={onDecrease}>Decrease</button>
    <button onClick={onReset}>Reset</button>
  </div>
  )
}