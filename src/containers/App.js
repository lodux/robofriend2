import React from 'react';
import Cardlist from '../components/Cardlist';
//import {robots} from './robots';
import Searchbox from '../components/Searchbox';
import './app.css';
import Scroll from '../components/Scroll';
import Errorboundry from '../components/Errorboundry';


class App extends React.Component {
	constructor () {
		super();
		this.state={
			robots: [],
			searchfield: ''
		}
	}

	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(users => {this.setState({ robots:users})});
	}


	onSearchEvent= (event)=> {
		this.setState({searchfield: event.target.value})


	}

	render(){
	const {robots , searchfield} =this.state;
	const filterobot = robots.filter(robot =>{
	return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ?
    	<h1>loading</h1> :
    	(
	    <div className='tc'>
		<h1 className='f2'>robofriends</h1>
		<Searchbox searchchange={this.onSearchEvent}/>
		<Scroll>
		<Errorboundry>
		<Cardlist robots={filterobot}/>
		</Errorboundry>
		</Scroll>
	   </div>
	   );
	
    }
}


	


export default App;