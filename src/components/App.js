import React from 'react';
import './App.css';
import Colors from './Colors.js'
import Preview from './Preview'
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
    <h1># see.ss</h1>
    <div className="container">
    <Preview />
    <Colors />
    </div>


    </div>
    </Router>
  );
}

export default App;
