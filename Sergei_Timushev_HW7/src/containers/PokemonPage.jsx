import React, { Component } from 'react';

import PokemonPageRender from '../components/PokemonPageRender'

export default class PokemonPage extends Component {
	constructor(props) {
		super(props);
    
		this.state = {
		    name: '',
		    id: props.match.params.id,
		    captured: false,
		    status: 'Don`t be caught',
		    dateCaptured: '',
		};
	  }

	loadItem() {
		const { id } = this.state;
		fetch(`http://localhost:3000/pokemons/${id}`)
			.then((response) => response.json())
			.then((result) => {
				this.setState({ 
					name: result.name,
				});
			})
	}

	setStatus() {
		const { id } = this.state;
		fetch('http://localhost:3000/captured_pokemons')
			.then((response) => response.json( ))
			.then ((result) => {
				if ( (result.filter(x => x.id == id)).length > 0 ) {
					this.setState({ 
						status: 'Caught',
						captured: true,
						dateCaptured: result.filter(x => x.id == id)[0].dateCaptured,
					});
				}
			})
	}
	
	componentDidMount() {
		this.loadItem();
		this.setStatus();		
	}

	render() {
		const { name, id, status, dateCaptured, captured} = this.state;
		return (
			<PokemonPageRender id={id} name={name} status={status} dateCaptured={dateCaptured} captured={captured} />
		);
	}
}