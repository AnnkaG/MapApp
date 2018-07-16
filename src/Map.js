import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMap extends Component {
  
    

  
  
  
  
  render() {
    const styles = {
      width: '75%',
      height: '100%',
          
    };
  
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
      </Map>
    );

      }}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBGOHlljthPaiT7p78xtjqzPWyCF4jiNc8')
})(GoogleMap)
