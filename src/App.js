import React, { Component } from 'react';
import './App.css';
import Flight from './components/Flight';



const URL = 'https://gist.githubusercontent.com/marcidenmark/b7d5160b19cf97b6d08c64dd68c5cc4c/raw/fbb0ed9382fb7238733db1ee38563ef4a8563014/flights.json';
//never change the state directly!
class App extends Component {
	constructor(args) {
		super(args)
		this.state={
			destinations:[] //I can name my array myself. destinations
		}
	}
	componentDidMount(){
		fetch(URL)
   		.then(response => response.json()) //fetch can't handle json.
    		.then((data) => {
    			this.setState({
    				destinations:data.results
    			})
    		});
	}
	render() {
		return (
		     <div className="App"> {/*AppCss*/}
		        	{this.state.destinations.map((destination)=>{
		        		return <Flight key={destination.flightNumber} {...destination} />
		        	})
		        	}
		     </div>
		);
	}
}

export default App;
