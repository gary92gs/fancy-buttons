import React, { useState, useReducer } from 'react';
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

  const [angryApp, dispatch] = useReducer((angryApp, amount = 1) => {

    return ((angryApp + amount <= 10) ? angryApp + amount : 0);
  }, 0);

  return (
    <div className={(light) ? 'App' : 'App dark'}>
      <h1>{(angryApp < 10) ? 'Fancy Buttons!' : "YOU'RE CLICKING TOO MANY BUTTONS!"}</h1>
      <section>
        <AngryButton increaseAppAnger={dispatch} />
        <CounterButton increaseAppAnger={dispatch} />
        <LightSwitchButton light={light} toggleLight={toggleLight} increaseAppAnger={dispatch} />
        <TextReapeaterButton increaseAppAnger={dispatch} />
      </section>

    </div>
  );
}

export default App;
