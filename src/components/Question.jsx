import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { quiz } from "../quiz";

const Question = ({
  currentQuestion,
  setCurrentQuestion,
  results,
  handleNextQuestion,
}) => {
  const { questions } = quiz;
  const { question, choices, answerValues } = questions[currentQuestion];

  const handleAnswerClick = (answerValue) => {
    const result = answerValues.indexOf(answerValue) + 1;
    handleNextQuestion(result);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", margin: "10px" }}>
        <Typography>{question}</Typography>
        {choices.map((choice, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => handleAnswerClick(index + 1)}
            sx={{ marginTop: "10px" }}
          >
            {choice}
          </Button>
        ))}
      </Box>
    </Container>
  );
};

export default Question;
