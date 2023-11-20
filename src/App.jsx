import { UncontrolledLogin } from "./UncontrolledLogin"

export function App () {

  function printLogin(data) {
    console.log(data)
  }
  return (
    <div>
      <UncontrolledLogin onLogin={printLogin}/>
    </div>
  )
}