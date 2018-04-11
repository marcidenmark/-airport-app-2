import React from "react";

// const flight = {
// 	@arrival_time = arrival_time
// 	@arrival_city = arrival_city
// 	@destination_city = destination_city
// 	@destination_time = destination_time
// 	@flight_number = flight_number
// }

//<Flight flight ={flight} />

class Flight extends React.Component {
	render() {
		return (
			<div>
			<p>
			{this.props.Destination}
			</p>
			<p>
			{this.props.arivalTime}
			</p>
		</div>)
	}

}



export default Flight;
