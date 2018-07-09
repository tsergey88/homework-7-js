import React, { Component } from 'react';
import PokemonsListRender from '../components/PokemonsListRender';

export default class PokemonsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: [],
            page: 1,
            showBtn: true,
        };
    }

    loadPokemons = () => {
        const { page, pokemons } = this.state;
        let { url } = this.props;
        if (!url) {
            url = 'http://localhost:3000/pokemons'
        }
        fetch(`${url}?_limit=9&_page=${page}`)
            .then((response) => response.json())
            .then((result) => {
                this.setState({ 
                    pokemons: pokemons.concat(result),
                    page: page + 1 
                });
                this.hideBtn(url, this.state.pokemons);
            })
    }

    hideBtn = (url, pokemons) => {
        fetch(`${url}`)
            .then((response) => response.json())
            .then((result) => {
                if (pokemons.length >= result.length) {
                    this.setState({ 
                        showBtn: false,
                    });                   
                } else {
                    this.setState({ 
                        showBtn: true,
                    }); 
                }
            })
    }

    componentDidMount() {
		this.loadPokemons();
    }

    render() {
        return (
			<PokemonsListRender pokemons={this.state.pokemons} loadPokemons={this.loadPokemons} hideBtn={this.state.showBtn} />
        );
    }
}