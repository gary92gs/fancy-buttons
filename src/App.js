import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextReapeaterButton from './components/TextRepeaterButton';

function App() {

  const [light, setLight] = useState(true);
  const toggleLight = () => {
    setLight((prev) => {
      return !prev;
    });
  };

  const [angeryApp, setAngeryApp] = useState(0);
  const increaseAppAnger = () => {
    setAngeryApp((prev) => {
      if (prev + 1 <= 10) {
        return prev + 1;
      }
      return 0;
    });
  };

  return (
    <div className={(light) ? 'App' : 'App dark'}>
      <h1>{(angeryApp < 10) ? 'Fancy Buttons!' : "YOU'RE CLICKING TOO MANY BUTTONS!"}</h1>
      <section>
        <AngryButton increaseAppAnger={increaseAppAnger} />
        <CounterButton increaseAppAnger={increaseAppAnger} />
        <LightSwitchButton light={light} toggleLight={toggleLight} increaseAppAnger={increaseAppAnger} />
        <TextReapeaterButton increaseAppAnger={increaseAppAnger} />
      </section>

    </div>
  );
}

export default App;
