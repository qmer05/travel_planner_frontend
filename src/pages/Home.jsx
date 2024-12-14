import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Container>
        <Title>Welcome to Travel Planner!</Title>
        <LogoImg src="/homepage-image.png" alt="Homepage image" />
        <Description>
          At <Highlight>Travel Planner</Highlight>, we help you explore the world with ease 
          by providing comprehensive information about <Highlight>countries</Highlight> you 
          wish to visit. Our platform assists in planning your trip, offering insights into 
          <Highlight> destinations</Highlight>, and helping you create <Highlight>personalized itineraries</Highlight>. 
          Get ready for an adventure of a lifetime with Travel Planner by your side!
        </Description>
      </Container>
    </>
  );
};

export default Home;

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

const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;

const LogoImg = styled.img`
  width: 30%;
`;
