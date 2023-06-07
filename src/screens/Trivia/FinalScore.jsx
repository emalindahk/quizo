import React from "react";

import Button from "../../components/Button";
import { TriviaContext } from "../../context";
import { screenMapping, screens } from "../../services/screenMapping";

import Lottie from "react-lottie";
import animationData from "../../assets/lottie/congratulations-lottie.json";

import styles from "./trivia.module.scss";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function FinalScore({ score, totalScore, setScreen }) {
  const {setCategory, setDifficulty} = React.useContext(TriviaContext);

  const startOver = () => {
    setCategory({});
    setDifficulty("");
    setScreen(screenMapping[screens.trivia].back);
  };

  return (
    <div className={styles.container__finalScore}>
      <h1>Congratulations!</h1>
      <span>
        Total Score: {score} / {totalScore}
      </span>
      <Lottie options={defaultOptions} height={400} width={'100%'} />
      <Button
        size="medium"
        color="primary"
        handleClick={() => startOver()}
        style={{ marginBottom: "1rem" }}
      >
        Start Again
      </Button>
    </div>
  );
}

export default FinalScore;
