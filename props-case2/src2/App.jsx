import { Welcome } from "./Welcome";

export function App () {
  return (
    <div>
      <Welcome/>
      <Welcome name="Alex"/>
    </div>
  )
}


//STAVOLTA ABBIAMO AGGIUNTO UN DEFAULT VALUE PER IL PROP NAME : 


/* nel primo caso, stavolta, anche se non viene passato nessun prop.name, sulla pagina viene stampato  "Welcome George!", 
poichè nel componente Welcome abbiamo impostato un "name : George" tramite defaultProps */



/* nel secondo caso invece viene passato un prop.name, ovvero name="Alex" : per cui sulla pagina, anche se di default
 nel componente Welcome abbiamo impostato un "name : George", in questo casi viene stampato "Welcome Alex!"

/* dunque, in questo caso, sulla pagina vengono stampati entrambi i risultati 
(ovvero sia "Welcome George!" che "Welcome Alex!") */