import React from 'react';
import './App.css';
import AddBooks from './components/AddBooks';
import DisplayBooks from './components/DisplayBooks';

function App() {
  return (
    <div className="App">

      <h1>Welcome to BookBarn</h1>
      

      <DisplayBooks />

      <AddBooks />

   

      
    </div>
  );
}

export default App;
