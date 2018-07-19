import React, { Component } from 'react';

class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
render() {
   

    return (
      <div id = "list-bar">
        <ul> {this.props.locations.map(location =>
              <li key={location.id} role = "button">
                  {location.title}
              </li>
             
              )
          
}
        </ul>
       
      </div>
);
    
              
                
      
      
   
  }
}

export default Marker;