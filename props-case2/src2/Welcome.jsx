export function Welcome ({name}) {
  return (
  <div>             
    <p>Welcome {name}!</p>
  </div>
  )                                        
}

Welcome.defaultProps = {                        //Qui abbiamo impostato un default name
  name: "George"
};


