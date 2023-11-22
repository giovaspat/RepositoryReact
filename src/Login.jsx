import { useInput } from "./UseInput";

export function Login() {
  const username = useInput("");
  const password = useInput("");

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(username.value);
    console.log(password.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
       <input type="text" value={username.value} onChange={username.onChange}/>
      </div>
      <div>
        <input type="password" value = {password.value} onChange={password.onChange}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}


