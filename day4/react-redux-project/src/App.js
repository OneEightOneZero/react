import React, { Component } from 'react';
import './App.css';

import Lemon from './components/Lemon';
import Tian from './components/Tian';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Lemon />
        <hr />
        <Tian />
      </div>
    );
  }
}

export default App;
