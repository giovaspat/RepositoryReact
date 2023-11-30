import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setUsers(json);
      });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.login}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
