import styled from "styled-components";
import SignUp from "../components/Signup";

const SignUpPage = () => {
  return (
    <PageContainer>
      <SignUpContainer>
        <SignUp />
      </SignUpContainer>
    </PageContainer>
  );
};

export default SignUpPage;

// Styled components
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 40vh;
  margin-top: 10vh;
`;

const SignUpContainer = styled.div`
  background: #1e7a82;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 35vh;
`;
