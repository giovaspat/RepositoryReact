import { GithubUser } from "./GithubUser";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GithubUser username="giovaspat" />} />
      </Routes>
    </div>
  );
}


