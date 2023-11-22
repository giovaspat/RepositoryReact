import { useState } from "react"; 

export function Counter ({startValue = 0, incrementValue}) {
  const [counter, setCounter] = useState(startValue)
  
  function handleIncrement () {
    setCounter((counter) => counter + incrementValue)   
    /* setCounter(counter + incrementValue)   

    possiamo usare quindi sia una funzione che un valore immediato : però se vogliamo 
    che il nostro aggiornamento sia basato su uno stato precedente allora 
    è preferibile usare una funzione
    */
  }

return (
  <div>
    <h2>{counter}</h2>
    <button onClick={handleIncrement}>Click</button>
  </div>
  )
}

