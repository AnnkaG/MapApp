import React, { Component } from 'react';

class CastleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
render() {
   

    return (
      <div id = "list-bar">
        <ul> {this.props.locations.map(location =>
              <li key={location.id}>
                  {location.title}
              </li>
             
              )
          
}
        </ul>
        <p>pokus</p>
      </div>
);
    
              
                
      
      
   
  }
}

export default CastleList;