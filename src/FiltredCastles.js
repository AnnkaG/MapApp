import React, { Component } from 'react';

import CastleList from "./CastleList.js";


class FiltredCastles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: " ",
      listDisplayed: false
    };
  }
 updateQuery = (query) =>  {
   this.setState( {
     query
   });
   this.props.updateFilteredCastles(query);
 }
  
render() {
   

    return (
      

    
              
                
      
      
   
  
)}
}
export default FilteredCastles;