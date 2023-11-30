import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";
import { useNavigate } from "react-router-dom";

export function App() {
   const addGithubUser = useNavigate();
    function handleGithubUserList() {
      addGithubUser("users");
    }
   return (
     <div>
      <button onClick={handleGithubUserList}> Go to users</button>
       <Routes>
         <Route index element={<h2>Add a user and select it</h2>} />
         <Route path="/users" element={<GithubUserList />} />
            <Route path="/users/:userData" element={<ShowGithubUser />} />
       </Routes>
     </div>
   );
}
