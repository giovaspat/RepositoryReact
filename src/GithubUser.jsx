import { GithubUsers } from "./GithubUsers";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {
  const {data,loading, error, onFetchUser} = useGithubUser(username)

  function handleGetUserData () {
    onFetchUser(username)
  }

return ( 
    <div>
      <button onClick={handleGetUserData}>Load Data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There's been an error</h1>}
      {data && <h1>{data.name}</h1>}
      {data && <p>{data.login}</p>}
      {data && <p>{data.avatar_url}</p>}
      <GithubUsers/>
    </div>
  );
}