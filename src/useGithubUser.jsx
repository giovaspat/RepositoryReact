import useSWR from "swr";

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`)

  function handleRecoverData() {
    mutate();
  }

  return { data, error, onRecover: handleRecoverData };
}
