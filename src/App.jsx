import { MountedComponent } from "./MountedComponent"
import { StrictMode } from "react";

export function App () {
  return (
    <StrictMode>
      <div>
        <MountedComponent/>
      </div>
    </StrictMode>
  )
}