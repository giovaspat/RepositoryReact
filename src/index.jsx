import { App } from "./App";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("root")).render(<App />);




/*
fetch ("https://api.github.com/users/giovaspat")
  .then((response)=> {
    console.log(`${response.status}`)
    return response.json()
  })

  .then((json)=> {
    console.log(json)
  })
  */