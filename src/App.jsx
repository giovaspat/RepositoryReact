import { ShowGithubUser } from "./ShowGithubUser";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function App() {
  const navigateGithubUser = useNavigate();
    function handleGithubUserLink() {
      navigateGithubUser("users/:username");
    }
  const navigateCounter = useNavigate();
    function handleCounterLink() {
      navigateCounter("/counter");
    }
  const navigateWelcome = useNavigate();
     function handleWelcomeLink() {
       navigateWelcome("/welcome");
     }
   
   return (
     <div>
       <ul>
         <li><button onClick={handleGithubUserLink}> Github User Info</button></li>
         <li><button onClick={handleCounterLink}>Try the counter</button></li>
         <li><button onClick={handleWelcomeLink}>Say Welcome to Alex</button></li>
       </ul>
       <Routes>
         <Route path="users/:username" element={<ShowGithubUser />} />
         <Route path="/counter" element={<Counter />} />
         <Route path="/welcome" element={<Welcome name="Alex" />} />
       </Routes>
     </div>
   );
}
