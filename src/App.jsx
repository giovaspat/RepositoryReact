import { Welcome } from "./Welcome";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Alex" />} />
      </Routes>
    </div>
  );
}
