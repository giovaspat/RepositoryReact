import {useState } from "react";

export function useGithubUser (){
  const [data, setData] = useState(null)
 
  async function fetchGithubUser (username) {
    try {
      const response = await fetch (`https://api.github.com/users/${username}`)
      const json = await response.json();
      setData(json)
    } catch (error) {
      console.log(error)
    } 
  }

  return{data, onFetchUser : fetchGithubUser}
}