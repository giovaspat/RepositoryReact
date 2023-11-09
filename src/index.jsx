import { App } from "./App"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root")).render(<App/>)



/* Sì è possibile utilizzare più di una volta il componente Hello all'interno del componente App.
 Ad esempio, in questo caso “Hello, World!” viene stampato due volte. */