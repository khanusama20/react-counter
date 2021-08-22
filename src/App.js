import { useState } from 'react';
import './App.css';
import DigitalClock from './views/DigitalClock'


function App() {
  const [_signal, setSignal] = useState("off")

  let clickHandler = function(signal_type) {
    setSignal(signal_type)    
  }
  
  return (
    <div className="App">
      <div className="device-row">
        <DigitalClock signal={_signal} />
        <div style={{marginTop: 50, marginLeft: 50, display: "flex", flexDirection: "column"}}>
          <button style={{marginBottom: 20}} onClick={() => clickHandler('on')}>Switched On</button>
          <button onClick={() => clickHandler('off')}>Switched Off</button>
        </div>
      </div>
    </div>
  );
}

export default App;
