import React from "react";
import Question from "./Question";

import triviaQuestions from "../../data/questions";
import styles from "./trivia.module.scss";

function Trivia({ setScreen }) {
  return (
    <div className={styles.container}>
        <Question questions={triviaQuestions} />
    </div>
  );
}

export default Trivia;
