import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome () {
  const [inputValue, setInputValue] = useState("")

  function handleInputChange(event) {
   const value = event.target.value;
   setInputValue(value)
  }

  return (
    <div>
      <h1>My Form</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <Welcome name={inputValue}/>
    </div>

  )
}