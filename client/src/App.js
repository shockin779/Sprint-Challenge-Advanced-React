import React from 'react';

import Players from './components/Players/Players';
import useDarkMode from './components/useDarkMode/useDarkMode';
import {useLocalStorage} from './components/useLocalStorage/useLocalStorage';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useLocalStorage('dark', false);

  const handleClick = event => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? 'App' : 'App darkapp'}>
      <button onClick={handleClick}>Use Dark Mode</button>
      <h1>Women's World Cup</h1>
      <h3>Players</h3>
      <Players />
    </div>
  );
}

export default App;
