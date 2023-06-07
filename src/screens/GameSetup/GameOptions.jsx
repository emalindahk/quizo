import React from "react";

import Card from "../../components/Card";
import DifficultySelect from "./DifficultySelect";
import { TriviaContext } from "../../context";

import { categories } from "../../data/categories";
import styles from "./gameSetup.module.scss";

function GameOptions() {
  const { category, setCategory } = React.useContext(TriviaContext);

  const handleCategorySelect = (category) => {
    setCategory({...category, name: category.name, image: category.image});
  };

  return (
    <div className={styles.container__gameOptions}>
      {!category.name ? (
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
            title={category.name}
            image={category.image}
            size="large"
            onClick={() => setCategory({})}
          />
          <DifficultySelect/>
        </div>
      )}
    </div>
  );
}

export default GameOptions;
