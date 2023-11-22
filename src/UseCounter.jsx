import { useState } from "react";

export function useCounter ({startValue = 0}) {
  const [counter, setCounter] = useState(startValue)


  function handleIncrease () {
    setCounter((counter) => counter + 1)
  }
    function handleDecrease () {
    setCounter((counter) => counter - 1)    
  }

  function handleReset () {
    setCounter(startValue)    
  }
return {
  counter: counter,
  onIncrease: handleIncrease,
  onDecrease: handleDecrease,
  onReset: handleReset
}

}