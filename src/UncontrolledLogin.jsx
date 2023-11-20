export function UncontrolledLogin ({onLogin}) {
  function handleUncontrolledLogin (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username")
    const password = formData.get("password")
    const checkbox = formData.get("checkbox") === "on" ? true : false;

     onLogin({ username, password, checkbox });
  }

 
return (
  <form onSubmit={handleUncontrolledLogin}>
    <div>
      <h1>My Uncontrolled Form</h1>
      <input type="text" name="username" />
      <input type= "password" name="password" />
      <input type="checkbox" name="checkbox"/>
      <button type="submit"> Login</button>
    </div>
  </form>
)

}