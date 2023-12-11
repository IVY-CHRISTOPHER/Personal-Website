// App.js
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home'
import "./styles/App.css"

const App = () => {
  return (
    <div className='container'>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
