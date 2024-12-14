import styled from "styled-components";

const Documentation = () => {

    return (
        <Container>
            <Title>Documentation</Title>
            <Description>
            <p>API: <a href="https://travelplannerapi.omertech.dk/api/countries" target="_blank" rel="noopener noreferrer">https://travelplannerapi.omertech.dk/api/countries</a></p>
            <p>Routes: <a href="https://travelplannerapi.omertech.dk/api/routes" target="_blank" rel="noopener noreferrer">https://travelplannerapi.omertech.dk/api/routes</a></p>
            </Description>
        </Container>
    )
}

export default Documentation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f9;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;