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
    fetch(`http://localhost:3000/pokemons/${id}/?_embed=captured_pokemons`)
      .then((response) => response.json())
      .then((result) => {
        if (result.captured_pokemons.length > 0) {
          this.setState({
            name: result.name,
            status: 'Caught',
            captured: true,
            dateCaptured: result.captured_pokemons[0].dateCaptured,
          });
        } else {
            this.setState({
              name: result.name,
            });
          }
      })
  }
  
  componentDidMount() {
    this.loadItem();
  }
  
  render() {
    const { name, id, status, dateCaptured, captured} = this.state;
    return (
      <PokemonPageRender id={id} name={name} status={status} dateCaptured={dateCaptured} captured={captured} />
    );
  }
}