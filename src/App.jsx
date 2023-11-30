import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
   
   return (
     <div>
       <Routes>
         <Route path="/users" element={<GithubUserList />} />
         <Route path="/users/:userData" element={<ShowGithubUser />} />
       </Routes>
     </div>
   );
}
