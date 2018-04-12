import React from "react";

class Flight extends React.Component {
	render() {
		return (
			<div>
				<h2>
					{this.props.Destination}
				</h2>
				<p>
					{this.props.arivalTime}
				</p>
				<p>
					{this.props.departureTime}
				</p>
				<p>
					{this.props.flightNumber}
				</p>
			</div>)
	}

}


export default Flight;
