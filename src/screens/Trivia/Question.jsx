import React from "react";
import Card from "../../components/Card";
import FinalScore from "./FinalScore";
import { TriviaContext } from "../../context";

import styles from "./trivia.module.scss";

function Question({ questions, setscreen }) {
  const { score, handleScore, totalScore } = React.useContext(TriviaContext);
  const [highlightAnswer, setHighlightAnswer] = React.useState(false);
  const [userAnswer, setUserAnswer] = React.useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const currentQuestionKey = Array.from(questions.keys())[currentQuestionIndex];

  const currentQuestion = questions.get(currentQuestionKey);

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === currentQuestion.answer;
    if (isCorrect) {
      handleScore();
    }

    setTimeout(() => {
      setHighlightAnswer(false);
      setUserAnswer("");
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 1000);
  };

  return (
    <div className={styles.container__questionContainer}>
      {currentQuestion && (
        <>
          <div style={{ fontSize: "14px" }}>
            {currentQuestionIndex + 1} / {questions.size}
          </div>
          <h2 className={styles.container__questionContainer_question}>
            {currentQuestionKey}
          </h2>
          <div className={styles.container__questionContainer_options}>
            {currentQuestion.options.map((option, index) => (
              <Card
                key={index}
                onClick={() => {
                  setHighlightAnswer(true);
                  setUserAnswer(option);
                  handleAnswer(option);
                }}
                color={`choice-${index + 1}`}
                title={option}
                outline={
                  option === currentQuestion.answer && highlightAnswer
                    ? "borderGreen"
                    : option !== currentQuestion.answer && highlightAnswer && option === userAnswer
                    ? "borderRed"
                    : ""
                }
                textCenter
              />
            ))}
          </div>
        </>
      )}
      {!currentQuestion && <FinalScore score={score} totalScore={totalScore} setScreen={setscreen} />}
    </div>
  );
}

export default Question;
