import React from "react";
import GameOptions from "./GameOptions";
import Button from "../../components/Button";

import { setupReducer, INITIAL_STATE } from "../../reducers/setupReducer";
import styles from "./gameSetup.module.scss";
import { screenMapping, screens } from "../../services/screenMapping";

function GameSetup({ setScreen }) {
  const [state, dispatch] = React.useReducer(setupReducer, INITIAL_STATE);

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Game Options!</h1>
      <GameOptions state={state} dispatch={dispatch} />
      {state.difficulty.length > 0 && (
        <Button
          handleClick={() =>
            setScreen(screenMapping[screens.gameOptions].next())
          }
        >
          Start
        </Button>
      )}
    </div>
  );
}

export default GameSetup;
