import React, { Component } from 'react';
import PokemonsList from '../../containers/PokemonsList.jsx';

export default class Captured extends Component {
    render() {
        return (
          <PokemonsList url={'http://localhost:3000/captured_pokemons'} />
        );
    }
}
