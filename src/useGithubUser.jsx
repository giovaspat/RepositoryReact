import {useState } from "react";


export function useGithubUser (username){
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
 
  async function fetchGithubUser (username) {
    setLoading(true)
    try {
      const response = await fetch (`https://api.github.com/users/${username}`)
      const json = await response.json();
      setData(json)
    } catch (error) {
      setData(null)
      setError(error)
    } finally {
      setLoading(false)
    }
      
  
  }

  return{data, loading, error, onFetchUser : fetchGithubUser}
}