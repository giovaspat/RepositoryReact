import { useState } from "react";

export function Counter ({startValue = 0}) {
  const [counter, setCounter] = useState(startValue)
  
  function handleIncrement () {
   //  setCounter(counter + 1)  --> 0 + 1 = 1
   //  setCounter(counter + 1)  --> 0 + 1 = 1                                         
   //  setCounter(counter + 1)  --> 0 + 1 = 1
      //la sequenza per ogni click è : 1,2,3,4, etc.
                                                            // --> in questo caso usiamo un valore immediato
    

    
    setCounter((counter) => counter + 1)    // 0 + 1 = 1
    setCounter((counter) => counter + 1)    // 1 + 1 = 2
    setCounter((counter) => counter + 1)    // 2 + 1 = 3

                                            // --> in questo caso usiamo la funzione callback, e quest'approccio si usa quando 
                                            // sappiamo che questa funzione verrà chiamata di nuovo e deve agire in modo aggiornato,  
                                            // cioè sulla base dell'ultimo valore corrente rilevato, e non ripartire dalla sua condizione iniziale

                                            // Infatti in questo caso il counter darà come risultato per ogni click 
                                            // la sequenza 3, 6, 9, 12, etc.
  }

return (
  <div>
    <h2>{counter}</h2>
    <button onClick={handleIncrement}>Click</button>
  </div>
  )
}