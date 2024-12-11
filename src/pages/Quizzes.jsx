import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const StartContainer = styled.div`
  padding: 20px;
  margin: 20px auto;
  width: 50%;
  background-color: #f0f8ff; /* Light blue background */
  border: 1px solid #b0c4de;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;

const StartButton = styled.button`
  background-color: #4682b4;
  color: white;
  padding: 20px 40px;
  margin: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background-color: #5a7f97;
  }
`;

const Title = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 20px;
`;

const Quizes = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    // Navigate to QuizDetail page to start the game
    navigate("/quizgame");
  };

  return (
    <StartContainer>
      <Title>Welcome to the Quiz Game</Title>
      <StartButton onClick={handleStartGame}>Start Game</StartButton>
    </StartContainer>
  );
};

export default Quizes;
