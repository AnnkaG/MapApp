import React from "react";

function InfoWindow(props) {
	const { selectedMarker, content } = props;

	return (
		<div 
			className="wiki-info"
		>
			<h2>{selectedMarker.title}</h2>
			<div className = "content">
				{content}
			</div>
            <p className="source">Source: https://en.wikipedia.org</p>
		</div>
	);
}

export default InfoWindow;