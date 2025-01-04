import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Error404NotFound = () => {
  const location = useLocation();
  return (
    <CenteredContainer>
      <Heading>Not Found</Heading>
      <Paragraph>
        Sorry, the page: <strong>{location.pathname}</strong> you are looking for does not exist.
      </Paragraph>
    </CenteredContainer>
  );
};

export default Error404NotFound;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  text-align: center;
  font-family: Arial, sans-serif;
  color: #333;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #ff6347; /* Tomato color for the heading */
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;