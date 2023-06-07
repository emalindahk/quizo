import React from "react";
import GameOptions from "./GameOptions";
import Button from "../../components/Button";
import { TriviaContext } from "../../context";

import styles from "./gameSetup.module.scss";
import { formatQuestions } from "../../services/formatQuestions";
import { screenMapping, screens } from "../../services/screenMapping";

function GameSetup({ setScreen }) {
  const { category, difficulty, setQuestions } =
    React.useContext(TriviaContext);
  const [loading, setLoading] = React.useState(false);

  const handleStart = async () => {
    const res = await fetch("https://gpt-questions.onrender.com/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        difficulty: difficulty,
        category: category.name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const trivia = formatQuestions(data);
        setQuestions(trivia);
        setLoading(false);
        setScreen(screenMapping[screens.gameOptions].next());
      });

  };

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Game Options!</h1>
      <GameOptions />

      {difficulty.length > 0 && (
        <Button
          handleClick={() => {
            setLoading(true);
            handleStart();
          }}
          size="medium"
          color="secondary"
        >
          {loading ? "Generating Questions..." : "Play Trivia"}
        </Button>
      )}
    </div>
  );
}

export default GameSetup;
