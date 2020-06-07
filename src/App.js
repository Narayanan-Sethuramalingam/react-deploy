import React from 'react';
import Picture  from './Images/Family.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Welcome to Our WebPage</h1>
    <img src ={Picture} alt="Profile-pic"></img>
    </div>
  );
}

export default App;
