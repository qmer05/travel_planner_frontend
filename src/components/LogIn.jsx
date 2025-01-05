import { useState } from "react";
import { Link } from "react-router-dom";

function LogIn({ login, errorMessage }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };

  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={performLogin}>
        <input placeholder="User Name" id="username" onChange={onChange} value={loginCredentials.username} /><br/><br/>
        <input placeholder="Password" id="password" onChange={onChange} value={loginCredentials.password} type="password" /><br/><br/>
        <button type="submit">Login</button>
      </form>
      <p style={{ color: 'red', fontWeight: "bold" }}>{errorMessage}</p>
      <p>Dont have an account? <Link to="/signup">Create one here</Link></p>
    </div>
  );
}

export default LogIn;