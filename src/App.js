import React, { Component } from "react";
import fetchJsonp from "fetch-jsonp";

import Header from "./Header";
import * as castleLocations from "./castles.json";
import SelectLocations from "./SelectLocations";
import InfoWindow from "./InfoWindow";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: castleLocations,
      map: "",
      markers: [],
      selectedMarker: {},
      content: " "
    };
  }

  componentDidMount() {
    window.initMap = this.loadMap;
    loadJs('https://maps.googleapis.com/maps/api/js?key=AIzaSyBGOHlljthPaiT7p78xtjqzPWyCF4jiNc8&callback=initMap');
  }

  loadMap = () => {
    let This = this;
    const { locations, markers } = this.state;

  // Create new map with given coordinates
    let map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: { lat: 48.5729772, lng: 19.4454983 }
    });

   

   // Create markers for castle.json 
    for (let i = 0; i < locations.length; i++) {
      
      let position = locations[i].position;
      let title = locations[i].title;
      let id = locations[i].id

    let marker = new window.google.maps.Marker({
        map: map,
        position: position,
        title: title,
        id: id,
        animation: window.google.maps.Animation.DROP,
        
      });

   // Update state with markers
      markers.push(marker);

   // Listeners for marker cliks - open close   
      // Open
      marker.addListener('click', function () {
        This.openWikiInfo(marker);
      });
    }
      // Close
      map.addListener('click', function () {
      This.closeWikiInfo();
     });
  }

  openWikiInfo = (marker) => {
    this.setState({
      infoWindowIsOpen: true,
      selectedMarker: marker
    });

    this.getWikiInfo(marker);
  }

  closeWikiInfo = () => {
    this.setState({
      infoWindowIsOpen: false,
      selectedMarker: {}
    });
  }

  getWikiInfo= (marker) => {
    let This = this;
    let castle = marker.title;
    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' +
    castle;
    url = url.replace(/ /g, '%20');
    
   // Wiki API
    fetchJsonp(url)
      .then(function(response) {
        return response.json();
      }).then(function (infos) {
        let pages = infos.query.pages;
        let pageId = Object.keys(infos.query.pages)[0];
        let pageContent = pages[pageId].extract;

        // Update state with retreived content
          This.setState({
          content: pageContent
        });
      }).catch(function (err) {
        let errMessage = 'Error occurred' + err;
        This.setState({
          content: errMessage
        });
      })
  }

  render() {
    return (
      <div className="App">
        <Header className = "header" aria-label = "application header" />
        <SelectLocations
          castleList={this.state.locations}
          markers={this.state.markers}
          openWikiInfo= {this.openWikiInfo}
        />

        {
          this.state.infoWindowIsOpen &&
          <InfoWindow
            selectedMarker={this.state.selectedMarker}
            content={this.state.content}
          />
        }
       <div id="map" role="application"></div>
      </div>
    );
  }
}

export default App;

function loadJs(src) {
  let ref = window.document.getElementsByTagName('script')[0];
  let script = window.document.createElement('script');

  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);

  script.onerror = function () {
    document.write("GoogleMap loading failed")
  };
}
