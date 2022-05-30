import './App.css';
import {useState , useEffect} from 'react'
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <FirstComponent text="Im the first component" />
          <SecondComponent text="Im second comopnent" />
        </div>
      </header>
    </div>
  );
}

export default App;





