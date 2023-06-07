import React from "react";
import Question from "./Question";
import { TriviaContext } from "../../context";

import styles from "./trivia.module.scss";

function Trivia({ setScreen }) {
  const { questions } = React.useContext(TriviaContext);
  return (
    <div className={styles.container}>
        <Question questions={questions} setscreen={setScreen} />
    </div>
  );
}

export default Trivia;
