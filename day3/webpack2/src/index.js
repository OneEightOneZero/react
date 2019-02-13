import React from 'react';
import ReactDOM from 'react-dom';
// bable.js
import './stylesheets/index.css';
import Xheader from './components/Xheader.jsx';
import Xmenu from './components/Xmenu.jsx';
import Xlemon from './components/Xlemon.jsx';
ReactDOM.render(
    <div>
        <Xheader />
        <Xmenu />
        <Xlemon />
    </div>,
    document.querySelector("#root")
)