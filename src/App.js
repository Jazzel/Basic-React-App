import React from 'react';
import './App.css';
import './index.css';

function App() {

  let name = 'Muhammad Jazzel Mehmood';
  return (
    <div className="App">
      <header className="App-header">
        <p className='heading'>Hello  <strong>{name}</strong> !</p> 
        <ul>
          <li>Hello world</li>
        <li>Using JSX: {5 + 10}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
