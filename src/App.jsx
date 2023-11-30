import { ShowGithubUser } from "./ShowGithubUser";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

export function App() {
   
   return (
     <div>
       <Routes>
         <Route path="users/:username" element={<ShowGithubUser />} />
       </Routes>
     </div>
   );
}
