import logo from './logo.svg';
import './App.css';

import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextReapeaterButton from './components/TextRepeaterButton';

function App() {
  return (
    <div className="App">
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton/>
        <CounterButton/>
        <LightSwitchButton/>
        <TextReapeaterButton/>
      </section>

    </div>
  );
}

export default App;
