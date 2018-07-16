import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMap from "./Map.js";
import Infobox from "./InfoBox.js"
import CastleList from "./CastleList.js"
import Header from "./Header.js"
import locations from "./locations.json"

import * as dataCastles from "./locations.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: locations,
      map: " ",
      
      
    }
  }

 
render() {
    return (
      <div className = "container">
        <Header className="header" />
        <hr></hr>
        <GoogleMap className = "mapa" />
        <div className = "list">
          <input type="text" placeHolder = "Search castle"></input>
          <CastleList locations={this.state.locations} />
        </div>
      </div>
    );
  }
}

export default App;
