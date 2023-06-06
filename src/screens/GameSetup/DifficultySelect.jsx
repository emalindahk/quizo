import React from "react";
import styles from "./gameSetup.module.scss";

import Button from "../../components/Button";

const difficultyLevels = ["Easy", "Medium", "Hard"];

function DifficultySelect({ state, dispatch }) {
  const handleDifficultySelect = (difficulty) => {
    const newDifficulty = state.difficulty === difficulty ? "" : difficulty;
    dispatch({ type: "SETUP_DIFFICULTY", payload: newDifficulty });
  };
  return (
    <div className={styles.container__difficulty__section}>
      <h3>Set Difficulty Level</h3>
      <div className={styles.container__difficulty__options}>
        {state.difficulty ? (
          <Button
            color={`choice-${difficultyLevels.indexOf(state.difficulty) + 1}`}
            level={state.difficulty}
            handleClick={handleDifficultySelect}
          >
            {state.difficulty}
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
