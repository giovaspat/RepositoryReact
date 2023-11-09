import { App } from "./App"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root")).render(<App/>)



/* Sì, è possibile eseguire il rendering del componente Message all'interno del componente App,
infatti in questo caso viene stampato il contenuto sia di <Hello/> che di <Message/>.
*/