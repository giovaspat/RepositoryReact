import { Counter } from "./Counter";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";


export function App() {
  return (
    <div>
      <Routes>
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </div>
  );
}

