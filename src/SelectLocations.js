import React, { Component } from "react";
import escapeRegExp from "escape-string-regexp";

import * as castleLocations from "./castles.json";

class SelectLocations extends Component {
	constructor(props) {
		super(props);
		this.state = {
            selectedLocations: castleLocations,
			selectedMarkers: [],
			currentMarker: {},
            query: ""
			};
	}

 // Set value of selectedMarkers equal to value of props
	componentDidMount() {
		this.setState({
			selectedMarkers: this.props.markers
		});
	}

// Update query when string changed  
	updateQuery = (query) => {
		this.setState({
			query
			});
        this.updateLocations(query);
	}

// Update markers when query string changed
	updateLocations= (query) => {
		let selectedArrLoc;
		let selectedArrMark;
        let selectedThis = this;

		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i');

			// create array of locations if query matches list
			selectedArrLoc = this.props.castleList.filter(location =>
				match.test(location.title)
			);

			// create array of markers if query matches list
			selectedArrMark = this.props.markers.filter(marker =>
				match.test(marker.title)
			);
          
            // set state to selected markers and loctions
			this.setState({
				selectedLocations: selectedArrLoc,
				selectedMarkers: selectedArrMark
			});
		} else {
          
            // set state to original markers and locations
			this.setState({
				selectedLocations: this.props.castleList,
				selectedMarkers: this.props.markers
                
			});
		}

		// Display markers based on new state
		this.props.markers.map(marker => marker.setVisible(false));
		setTimeout(function () {
			selectedThis.props.markers.map(marker =>
			selectedThis.makeVisible(marker))
		}, 1)
	}
    
    // Makes marker visible when equal to query
	makeVisible= (marker) => {
		this.state.selectedMarkers.map(selectedMarker =>
			selectedMarker.id === marker.id && marker.setVisible(true)
		)
	}
   updateClicked = (location) => {
       let This = this;
        this.changeMarker(location); 
        this.getClickedMarker(location);
        setTimeout(function(){
		This.props.openWikiInfo(This.state.currentMarker);
        },1 )
	}  
   
    getClickedMarker = (location) => {
      this.state.selectedMarkers.map(selectedMarker =>
              selectedMarker.id === location.id &&
                    this.setState({
                        currentMarker: selectedMarker
                    })
         ); 
      }
  
    // Animates Marker on list button click
    changeMarker = (location) =>  {
      this.state.selectedMarkers.map(selectedMarker =>
          selectedMarker.id === location.id &&              selectedMarker.setAnimation(window.google.maps.Animation.BOUNCE));                      
      this.state.selectedMarkers.map(selectedMarker =>
          selectedMarker.id === location.id && 
            selectedMarker.setAnimation(null)
          );
 }
   
    
	render () {
		const { query, selectedLocations} = this.state;

		return (
			<div className="castle-list">
				<form
					className="input"
					onSubmit={(e) => e.preventDefault()}
				 >
					
					<input
						className="input-box"
						type="text"
						placeholder="Search Castle . . ."
						value={query}
						onChange={(e) => 
							this.updateQuery(e.target.value)}
                        aria-label="filtering box"
					 />
				</form>

				{
					<ul className="castles" aria-label= "castle locations">
					{
						selectedLocations.map(location => (
							<li
								className="castle-li"
								key={location.id}
                                role = "button"
                                onClick={() => this.updateClicked(location) }
                                onKeyPress={() => this.updateClicked(location) }
                                tabIndex = {0}
							>
								{location.title}
							</li>
						))
					}
				</ul>
				}
			</div>
		);
	}
}

export default SelectLocations;