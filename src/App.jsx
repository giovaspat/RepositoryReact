import { Counter } from "./Counter";
import { StrictMode } from "react";

export function App () {
  return (
    <StrictMode>
      <div>
        <Counter/>
      </div>
    </StrictMode>
  )
}