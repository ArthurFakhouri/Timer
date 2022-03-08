import './App.css';

function App() {

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
