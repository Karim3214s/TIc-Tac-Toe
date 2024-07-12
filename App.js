import React from 'react';
import Game from './Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
      </header>
      <main>
        <Game />
      </main>
    </div>
  );
}

export default App;
