import React, { Component } from 'react';

import PokemonRender from '../components/PokemonRender'

export default class PokemonItem extends Component {

	constructor(props) {
        super(props);

        this.state = {
			isCaptured: false,
        };
    }
	
	AddToCaptured = () => {
		const { name, id } = this.props,
			today = new Date(),
			dateCaptured = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + ', ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
		this.setState({ 
			isCaptured: true,
		});
		fetch('http://localhost:3000/captured_pokemons', {
			method: 'POST',
			body: JSON.stringify({name, id, dateCaptured}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}

	componentDidMount() { 
		const { id } = this.props;
		fetch('http://localhost:3000/captured_pokemons')
			.then((response) => response.json( ))
			.then ((result) => {
				if ( (result.filter(x => x.id === id)).length > 0 ) {
					this.setState({ 
						isCaptured: true,
					});
				}
			})
    }
    
    render() {
        const { name, id } = this.props;
        return(
            <PokemonRender name={name} id={id} isCaptured={this.state.isCaptured} AddToCaptured={this.AddToCaptured} />
        )
    }

}