import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [timer, setTimer] = useState(0);
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    let interval = null;
    if (allow) {
      interval = setInterval(() => {
        setTimer(timer => timer + .1);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [allow])

  function showTime(timer) {
    if (unity(timer, 1) !== '00') {
      return `${unity(timer, 1)} hora(s), ${unity(timer, 0)} minuto(s) e ${(timer % 60).toFixed(2)} segundo(s)`
    } else if (unity(timer, 0) !== '00') {
      return `${unity(timer, 0)} minuto(s) e ${(timer % 60).toFixed(2)} segundo(s)`
    } else
      return `${(timer % 60).toFixed(2)} segundos`;
  }

  function unity(value, type) {
    let ans = "";
    switch (type) {
      case 0: ans = Math.floor((value / 60) % 60).toString();
        break;
      default: ans = Math.floor((value / 3600) % 24).toString();
    }
    return ans.replace(/^[0-9]$/gm, '0' + ans);
  }

  function play() {
    setAllow(true);
  }

  function pause() {
    setAllow(false);
  }

  function reset() {
    setTimer(0);
    pause();
  }

  return (
    <div className="App">
      <div className='container'>
        <div className="timer">
          <label>horas:minutos:segundos.milisegundos</label>
        </div>
        <span>X horas, Y minutos e Z segundos</span>
        <div className='operations'>
          <button id="play">Play</button>
          <button id="pause">Pause</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
