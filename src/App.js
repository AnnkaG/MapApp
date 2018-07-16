import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMap from "./Map.js";
import Infobox from "./InfoBox.js"

import * as dataCastles from "./locations.json"

class App extends Component {
 
render() {
    return (
      <GoogleMap />
    );
  }
}

export default App;
