import React from "react";
import styles from "./home.module.scss";

import { screens, screenMapping } from "../../services/screenMapping";

function Home({ setScreen }) {
  return (
    <div className={styles.startGame}>
      <button
        className={styles.startGame__btn}
        onClick={() => setScreen(screenMapping[screens.home].next)}
      >
        Start Game
      </button>
    </div>
  );
}

export default Home;
