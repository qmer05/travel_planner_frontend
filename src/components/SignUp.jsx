import { useState } from "react";
import facade from "../util/apiFacade";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const init = { username: "", password: "" };
  const [signUpCredentials, setSignUpCredentials] = useState(init);

  const performSignUp = (evt) => {
    evt.preventDefault();
    facade.createUser(signUpCredentials.username, signUpCredentials.password)
      .then(() => {
        navigate("/login");
        alert("User created successfully!");
      })
      .catch((error) => {
        alert("Error creating user: " + error.message);
      });
  };

  const onChange = (evt) => {
    setSignUpCredentials({ ...signUpCredentials, [evt.target.id]: evt.target.value });
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={performSignUp}>
        <input placeholder="User Name" id="username" onChange={onChange} value={signUpCredentials.username} /><br/><br/>
        <input placeholder="Password" id="password" onChange={onChange} value={signUpCredentials.password} type="password" /><br/><br/>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default SignUp;