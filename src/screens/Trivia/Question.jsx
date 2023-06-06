import React from 'react'
import Card from '../../components/Card'

import styles from "./trivia.module.scss";

function Question({ questions, options }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const currentQuestionKey = Array.from(questions.keys())[
      currentQuestionIndex
    ];

    const currentQuestion = questions.get(currentQuestionKey);

    const handleAnswer = (selectedAnswer) => {
      const isCorrect = selectedAnswer === currentQuestion.answer;
      if (isCorrect) {
        console.log("Correct answer!");
        setScore(score + 1);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        console.log("Incorrect answer!");
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };

  return (
    <div className={styles.container__questionContainer}>
      {currentQuestion && (
        <>
          <div style={{fontSize: '14px'}}>Score: {score} / {questions.size}</div>
          <h2 className={styles.container__questionContainer_question}>
            {currentQuestionKey}
          </h2>
          <div className={styles.container__questionContainer_options}>
            {currentQuestion.options.map((option, index) => (
              <Card
                key={index}
                onClick={() => handleAnswer(option)}
                color={`choice-${index + 1}`}
                title={option}
                textCenter
              />
            ))}
          </div>
        </>
      )}
      {!currentQuestion && <h2>No more questions!</h2>}
    </div>
  );
}

export default Question