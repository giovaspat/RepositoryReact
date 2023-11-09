import { Welcome } from "./Welcome";

export function App () {
  return (
    <div>
      <Welcome/>
      <Welcome name="Alex"/>
    </div>
  )
}


/* nel primo caso non viene passato nessun prop.name, e sulla pagina viene stampato solo "Welcome !", con uno spazio vuoto tra "Welcome" e "!",
che lascia intendere la presenza di una sorta di undefined, in quanto è come se <Welcome/> si aspettasse di ricevere un "name" che però
non è stato specificato*/



// nel secondo caso invece viene passato un prop.name, ovvero name="Alex", per cui sulla pagina, in quest'esempio, viene stampato "Welcome Alex!"

/* dunque, dal momento che qui abbiamo inserito entrambi i paragrafi, in console vengono stampati entrambi i risultati 
(ovvero sia "Welcome!" che "Welcome Alex!") */