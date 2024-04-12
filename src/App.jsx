import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import Question from "./components/Question";
import { quiz } from "./quiz";
import { calculateResult } from "./calculateResult";
import "./App.css";

const App = () => {
  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [house, setHouse] = useState("");

  const clickToStart = () => {
    setStart(true);
  };

  const handleRestart = () => {
    setResults([]);
    setShowResults(false);
  };

  const showResult = () => {
    setShowResults(true);
    const house = calculateResult(results);
    setHouse(house);
  };

  const handleNextQuestion = (getResult) => {
    setResults((prevResult) => [...prevResult, getResult]);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        >
          What is your Hogwarts House?
        </Typography>
        {start && !showResults ? (
          <Question
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            results={results}
            handleNextQuestion={handleNextQuestion}
          />
        ) : showResults ? (
          <Box>
            <Typography variant="h4">
              Your Hogwarts House is: {house}
            </Typography>
            <Button variant="contained" onClick={handleRestart}>
              Restart Quiz
            </Button>
          </Box>
        ) : (
          <Button variant="contained" onClick={clickToStart}>
            Start Quiz!
          </Button>
        )}
        {start && currentQuestion === quiz.questions.length - 1 && (
          <Button variant="contained" onClick={showResult}>
            Show Results
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default App;
