import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {
  const {data, onFetchUser} = useGithubUser(username)

  function handleGetUserData () {
    onFetchUser(username)
  }

return ( 
    <div>
      <button onClick={handleGetUserData}>Load Data</button>
      {data && <h1>{data.name}</h1>}
      {data && <p>{data.login}</p>}
      {data && <p>{data.avatar_url}</p>}
    </div>
  );
}