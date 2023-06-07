import React, { useContext } from "react";
import styles from "./gameSetup.module.scss";
import { TriviaContext } from "../../context";

import Button from "../../components/Button";

const difficultyLevels = ["Easy", "Medium", "Hard"];

function DifficultySelect() {
  const { difficulty, setDifficulty } = useContext(TriviaContext);

  const handleDifficultySelect = (diff) => {
    const newDifficulty = difficulty === diff ? "" : diff;
    setDifficulty(newDifficulty);
  };

  return (
    <div className={styles.container__difficulty__section}>
      <h3>Set Difficulty Level</h3>
      <div className={styles.container__difficulty__options}>
        {difficulty ? (
          <Button
            color={`choice-${difficultyLevels.indexOf(difficulty) + 1}`}
            level={difficulty}
            handleClick={handleDifficultySelect}
          >
            {difficulty}
          </Button>
        ) : (
          difficultyLevels.map((level, index) => (
            <Button
              key={index}
              color={`choice-${index + 1}`}
              level={level}
              handleClick={handleDifficultySelect}
            >
              {level}
            </Button>
          ))
        )}
      </div>
    </div>
  );
}

export default DifficultySelect;
