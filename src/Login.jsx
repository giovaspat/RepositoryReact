import { useState } from "react";

export function Login ({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  function handleUsername(event) {
    setUsername(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  function handleCheckbox(event) {
    setCheckbox(event.target.checked)
  }

  function handleClickButton () {
        onLogin({username, password})
  }

  

return (
  <div>
    <h1>My Form</h1>
    <input type="text" value={username} onChange={handleUsername}/>
    <input type= "password" value={password} onChange={handlePassword} />
    <input type="checkbox" checked={checkbox} onChange={handleCheckbox}/>
    <button onClick={handleClickButton} disabled ={!username || !password}> Login</button>
  </div>
)


}