import React, { Component } from 'react';

import './App.css';
import GoogleMap from "./Map.js";
import Infobox from "./InfoBox.js"
import CastleList from "./CastleList.js"
import Header from "./Header.js"
import locations from "./locations.json"
import FiltredCastles from "./FiltredCastles.js"
import * as dataCastles from "./locations.json"

import excapeRegExp from "excape-string-regexp";

let markers = [];
let marker = " ";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: locations,
      marker: {}, 
      currentMarker: " "
      
      
    };
  }

 
render() {
    return (
      <div className = "container">
        <Header className="header" />
        <hr></hr>
        <GoogleMap className = "mapa" 
          locations={this.state.locations}
          CurrentMarker={this.state.currentMarker}
      
        />
        <div className = "list">
          <div id="inputBox">
            <input type="text" placeholder = "Search castle"></input>
          </div>
          <CastleList locations={this.state.locations} />
         
        </div>
      </div>
    );
  }
}

export default App;
