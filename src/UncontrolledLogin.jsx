
export function UncontrolledLogin ({onLogin}) {
  function handleUncontrolledLogin (event) {
    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const checkbox = event.target.elements.namedItem("checkbox").checked;

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