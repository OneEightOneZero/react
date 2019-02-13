import React, { Component } from 'react';

import Xheader from './components/Xheader'
import Xsearch from './components/Xsearch'
import Xtab from './components/Xtab'
// import logo from './logo.svg';
// style
import './App.css';

// script
class App extends Component {
  render() {
    // template
    return (
      <div>
        <Xheader />
        <Xsearch />
        <Xtab />
      </div>
    );
  }
}

export default App;
