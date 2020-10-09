import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register/>
        <p>
          Hello, you.
        </p>
      </header>
    </div>
  );
}

export default App;
