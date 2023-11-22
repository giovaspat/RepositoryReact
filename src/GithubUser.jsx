import { useEffect,useState } from "react";
import { GithubUsers } from "./GithubUsers";

export function GithubUser({username}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
 
  useEffect(() => {
    setLoading(true)
    fetch (`https://api.github.com/users/${username}`)
       .then((response)=> {
            if (response.status !== 200) {
              setError(new Error("User not found"))
            }

            return response.json()
      })

       .then((json)=> {
            console.log(json)
            setData(json)
      })

       .catch((error)=> {
         setError(error)
      })

      .finally(()=>{
         setLoading(false)
      })

  },[username])

return ( 
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There's been an error</h1>}
      {data && <h1>{data.name}</h1>}
      {data && <p>{data.login}</p>}
      {data && <p>{data.avatar_url}</p>}
      <GithubUsers/>
    </div>
  );
}