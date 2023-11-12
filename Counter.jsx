import { useEffect, useState } from "react";

export function Counter ({startValue = 0}) {
  const [counter, setCounter] = useState(startValue)

  useEffect(() => {
    console.log(`Counter value is ${counter}`)
  }, [counter])
  
  function handleIncrement () {
    setCounter((counter) => counter + 1)    
  }

return (
  <div>
    <h2>{counter}</h2>
    <button onClick={handleIncrement}>Click</button>
  </div>
  )
}