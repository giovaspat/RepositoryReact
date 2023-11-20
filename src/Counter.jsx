import { useEffect, useRef, useState } from "react";

export function Counter ({startValue = 0}) {
  const [counter, setCounter] = useState(startValue)
  const changeCounter = useRef(null)
  const previousCounterValue = useRef(null)

  useEffect(() => {
    if (counter > previousCounterValue.current) {
      changeCounter.current = ("Up")
    } else if (counter < previousCounterValue.current){
      changeCounter.current = ("Down" )
    }

      if (changeCounter.current !== previousCounterValue ) {
      console.log(`Counter Direction : ${changeCounter.current} , ${counter}`);
    }

    previousCounterValue.current = counter;

  }, [counter])
  
  function handleIncrement () {
    setCounter((counter) => counter + 1)    
  }

  function handleDecrement () {
    setCounter((counter) => counter - 1)    
  }

return (
  <div>
    <h2>{counter}</h2>
    <button onClick={handleIncrement}>Up</button>
    <button onClick={handleDecrement}>Down</button>
  </div>
  )
}