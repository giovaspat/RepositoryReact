import { App } from "./App"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root")).render(<App/>)



/* Sì è possibile utilizzare il componente Hello più di una volta nel componente App :
ad esempio, in questo caso “Hello, World!” viene stampato due volte.
*/