import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((userData) => {
        setUsers((listUsers) => [...listUsers, userData]);
      })
      .catch((error) => {
        console.error("Error fetch", error);
      });
  };

  return (
    <div>
      <div>
        <button onClick={handleGetUserData}>Load Data</button>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {users.map((user) => (
          <GithubUser key={user.login} username={user.login} />
        ))}
      </div>
    </div>
  );
}
