import React from "react";

import Card from "../../components/Card";
import DifficultySelect from "./DifficultySelect";

import { categories } from "../../data/categories";
import styles from "./gameSetup.module.scss";

function GameOptions({ state, dispatch }) {
  const handleCategorySelect = (category) => {
    dispatch({ type: "SETUP_CATEGORY", payload: category });
  };

  return (
    <div className={styles.container__gameOptions}>
      {!state.category.name ? (
        <>
          <h3>Choose a category</h3>
          <div className={styles.container__collections__grid}>
            {categories.map((category, index) => (
              <Card
                key={index}
                title={category.name}
                image={category.image}
                onClick={() => handleCategorySelect(category)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className={styles.container__difficulty}>
          <Card
            title={state.category.name}
            image={state.category.image}
            size="large"
            onClick={() => dispatch({ type: "REMOVE_CATEGORY" })}
          />
          <DifficultySelect state={state} dispatch={dispatch} />
        </div>
      )}
    </div>
  );
}

export default GameOptions;
