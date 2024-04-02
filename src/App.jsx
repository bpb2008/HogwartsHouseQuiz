import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import Question from "./components/Question";
import "./App.css";

const App = () => {
  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState();

  const clickToStart = () => {
    setStart(true);
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
        {start ? (
          <Question
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            results={results}
            setResults={setResults}
          />
        ) : (
          <Button variant="contained" onClick={clickToStart}>
            Start Quiz!
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default App;
