import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
  const { userData } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userData}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [userData]);

  return (
    <div>
      {data && <h1>{data.name}</h1>}
      {data && <p>{data.login}</p>}
      {data && <p>{data.avatar_url}</p>}
    </div>
  );
}
