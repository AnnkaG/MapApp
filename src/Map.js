import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        activeMarker:{}
      };
    }

  
  
  
  
  render() {
    const styles = {
      width: '75%',
      height: '100%',
          
    };
    const { locations, currentMarker} = this.props;
    const { activeMarker} = this.state;
           
    return (
      <Map
        google = {this.props.google }
        zoom =  {8}
        style = {styles}
        initialCenter = {{
                  lat: 48.73946,
                  lng: 19.55349
        }}
      >
      {locations.map(location =>
          <Marker
            key = {location.id}
            title = {location.title}
            position = {location.location}
            animation = {(currentMarker === location.title)&& this.props.google.maps.Animation.DROP}
          />
        )}
      </Map>
    );

      }}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBGOHlljthPaiT7p78xtjqzPWyCF4jiNc8')
})(GoogleMap)
