import React from "react";
import "./flight.css"

class Flight extends React.Component {
	render() {
		return (
			<div>
				<h4 className="flight-city">
					Destination: <br/> {this.props.Destination}
				</h4>
				<p> Arival Time
					<br/>{this.props.arivalTime}
				</p>
				<p> Departure Time
					<br/>{this.props.departureTime}
				</p>
				<p> Flight Number
					<br/>{this.props.flightNumber}
				</p>
			</div>)
	}

}


export default Flight;
