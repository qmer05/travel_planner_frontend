import styled from "styled-components";
import LoggedIn from "../components/LoggedIn";
import LogIn from "../components/LogIn";
import facade from "../util/apiFacade";
import { useState } from "react";

function LoginPage({ loggedIn, setLoggedIn }) {
  const [errorMessage, setErrorMessage] = useState("");
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };

  const login = (user, pass) => {
    facade.login(user, pass)
      .then(() => {
        setLoggedIn(true);
        setErrorMessage(""); // Clear any previous error
      })
      .catch(() => {
        setErrorMessage("Invalid login. Please try again");
      });
  };

  return (
    <PageContainer>
      {!loggedIn ? (
        <LoginContainer>
          <LogIn login={login} errorMessage={errorMessage} />
        </LoginContainer>
      ) : (
        <LoginContainer>
          <LoggedIn loggedIn={loggedIn} />
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        </LoginContainer>
      )}
    </PageContainer>
  );
}

export default LoginPage;

// Styled components
const PageContainer = styled.div`
  background-color: #f4f4f9; /* Background color */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align to the top */
  height: 100vh; /* Full height of the viewport */
  padding-top: 10vh; /* Add some top padding */
  box-sizing: border-box;
`;

const LoginContainer = styled.div`
  background: #1E7A82;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 35vh;
`;

const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background: #dc3545;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #c82333;
  }
`;
