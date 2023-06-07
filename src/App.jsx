import React, { useState } from 'react';
import styles  from './App.module.scss';
import ScreenNavigation from './services/screenNavigation';
import TriviaProvider from './context';

function App() {
  const [screen, setScreen] = useState('home')
  return (
    <div className={styles.container}>
      {/* <div className={styles.container__topScore}>Top Score: {0} points</div> */}
      <TriviaProvider>
        <ScreenNavigation screen={screen} setScreen={setScreen} />
      </TriviaProvider>
    </div>
  );
}

export default App;
