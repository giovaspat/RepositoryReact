import { useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const [isLoading, setLoading] = useState(false);
  const {data,error} = useGithubUser(username);

  function handleGetUserData (){
    setLoading(true);
  };

  return (
    <div>
      <button onClick={handleGetUserData}>Load Data</button>
      {isLoading && error && <h2>An error has occurred</h2>}
      {isLoading && data &&!error &&(
        <div>
          <h1>{data.name}</h1>
          <p>{data.login}</p>
          <p>{data.avatar_url}</p>
        </div>
      )}
    </div>
  );
}
