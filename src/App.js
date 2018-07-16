import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMap from "./Map.js";
import Infobox from "./InfoBox.js"
import CastleList from "./CastleList.js"
import Header from "./Header.js"

import * as dataCastles from "./locations.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [ {"title": "Bratislava Castle","location": {"lat":48.14816, "lng":17.10674}, "id":0},
    {"title": "Orava Castle", "location": {"lat":49.262048, "lng":19.356824}, "id":1},
    {"title": "Spis Castle", "location": {"lat":48.9994743, "lng":20.765323}, "id":2},
    {"title": "Zvolen", "location": {"lat":48.5729772, "lng":19.1254983}, "id":3},
    {"title": "Nitra Castle", "location": {"lat":48.3183925, "lng":18.0846271}, "id":4},
    {"title": "Trencin Castle", "location": {"lat":48.8941282, "lng":18.0425604}, "id":5},
    {"title": "Bojnice Castle", "location": {"lat":48.779914, "lng":18.5773394}, "id":6},
    {"title": "Cerveny Kamen", "location": {"lat":48.39182, "lng":17.3329437}, "id":7},
    {"title": "Krasna Horka", "location": {"lat":48.6581363, "lng":20.5982546}, "id":8}],
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
