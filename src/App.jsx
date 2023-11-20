import { Login } from "./Login"

export function App () {

  function printLogin(data) {
    console.log(data)
  }
  return (
    <div>
      <Login onLogin={printLogin}/>
    </div>
  )
}