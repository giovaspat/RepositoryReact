import { Welcome } from "./Welcome"
import { Age } from "./Age"

export function App () {
 
  return (
    <div>
      <Welcome name="Alex"/>
      <Age age= {48} />
    </div>
  )
}