import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`,fetcher); 

  function handleRecoverData () {
    mutate()
  }

  return { data, error, onRecover : handleRecoverData};
}
