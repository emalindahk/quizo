import React from "react";
import { screens } from "./screenMapping";
import GameSetup from "../screens/GameSetup";
import Home from "../screens/Home";
import Trivia from "../screens/Trivia";

const ScreenNavigation = ({ screen, setScreen }) => {
  switch (screen) {
    case screens.home:
      return <Home setScreen={setScreen} />;
    case screens.gameOptions:
      return <GameSetup setScreen={setScreen} />;
    case screens.trivia:
      return <Trivia setScreen={setScreen} />;
    default:
      return <div>you're lost</div>;
  }
};

export default ScreenNavigation;
