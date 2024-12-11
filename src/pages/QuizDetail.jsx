import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

// Styled Components for table and quiz display
const DetailContainer = styled.div`
  padding: 20px;
  margin: 20px auto;
  width: 30%;
  background-color: #f0f8ff;
  border: 1px solid #b0c4de;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #4682b4;
  color: white;
`;

const Tr = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #e6f2ff;
  }
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-top: 1px solid #ddd;
`;

const Question = styled.h3`
  margin-bottom: 20px;
`;

const OptionsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Option = styled.li`
  background-color: #e6f2ff;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d0e7ff;
  }

  &.correct {
    background-color: #d4edda; /* Light green background for correct answer */
  }

  &.incorrect {
    background-color: #f8d7da; /* Light red background for incorrect answer */
  }
`;

const Feedback = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ScoreBoard = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Player = styled.span`
  font-family: "Arial", sans-serif;
  padding: 5px 15px;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  text-align: center;

  &.player1 {
    background-color: #13ff22; /* Blue for Player 1 */
  }

  &.player2 {
    background-color: #ff190e; /* Red for Player 2 */
  }
`;

const QuizDetail = () => {
  const { quizzes } = useOutletContext();
  const navigate = useNavigate();

  const [playerTurn, setPlayerTurn] = useState(1); // Tracks current player (1 or 2)
  const [playerScores, setPlayerScores] = useState({ player1: 0, player2: 0 }); // Tracks scores
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category
  const [currentQuestion, setCurrentQuestion] = useState(null); // Current question object
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    // Fetch a question from the selected category
    const categoryQuestions = quizzes.filter(
      (quiz) => quiz.category === category
    );
    const randomQuestion =
      categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
    setCurrentQuestion(randomQuestion);
    setSelectedOption(null); // Reset selected option
    setIsCorrect(null); // Reset correctness feedback
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const isAnswerCorrect = option === currentQuestion.correctAnswer;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      // Update the score for the current player
      const currentPlayer = playerTurn === 1 ? "player1" : "player2";
      setPlayerScores((prevScores) => ({
        ...prevScores,
        [currentPlayer]: prevScores[currentPlayer] + 1,
      }));

      // Check if the current player has won
      if (playerScores[currentPlayer] + 1 === 5) {
        setTimeout(() => {
          alert(`Player ${playerTurn} wins!`);
          navigate("/home"); // Redirect to home or restart game
        }, 500);
        return;
      }
    }

    // Switch turns to the next player
    setTimeout(() => {
      setPlayerTurn(playerTurn === 1 ? 2 : 1);
      setSelectedCategory(""); // Reset category for next player
      setCurrentQuestion(null); // Reset current question
    }, 1000);
  };

  return (
    <DetailContainer>
      <h2>Player {playerTurn}&apos;s Turn</h2>
      <ScoreBoard>
        <Player className="player1">Player 1: {playerScores.player1}</Player>
        <Player className="player2">Player 2: {playerScores.player2}</Player>
      </ScoreBoard>

      {/* Category table */}
      {!selectedCategory && (
        <>
          <h3>Select a Category</h3>
          <Table>
            <Thead>
              <Tr>
                <Th>Category</Th>
                <Th>Difficulty</Th>
              </Tr>
            </Thead>
            <tbody>
              {quizzes.map((quiz) => (
                <Tr
                  key={quiz.id}
                  onClick={() => handleCategoryClick(quiz.category)}
                >
                  <Td>{quiz.category.replace(/_/g, " ")}</Td>
                  <Td>{quiz.difficulty}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </>
      )}

      {currentQuestion && (
        <>
          <Question>{currentQuestion.question.text}</Question>
          <OptionsList>
            {[
              ...currentQuestion.incorrectAnswers,
              currentQuestion.correctAnswer,
            ]
              .sort(() => Math.random() - 0.5) // Shuffle options
              .map((option, index) => (
                <Option
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={
                    selectedOption === option
                      ? isCorrect
                        ? "correct"
                        : "incorrect"
                      : ""
                  }
                >
                  {option}
                </Option>
              ))}
          </OptionsList>
          {selectedOption && (
            <Feedback>{isCorrect ? "Correct!" : "Wrong answer!"}</Feedback>
          )}
        </>
      )}
    </DetailContainer>
  );
};

export default QuizDetail;