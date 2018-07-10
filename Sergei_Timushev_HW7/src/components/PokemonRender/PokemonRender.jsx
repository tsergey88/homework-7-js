import './PokemonRender.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button  from 'react-bootstrap/lib/Button';
import Col  from 'react-bootstrap/lib/Col';

export default class PokemonRender extends Component {
    render() {
		  const { name, id, isCaptured, addToCaptured} = this.props;

      return (
        <Col xs={12} md={6} lg={4} className="text-center item">
          <div>
            <Link to={`/pokemon/${id}`} className="text-center">
              <img src={`https://github.com/epam-js-may-2018/homework-7-js/raw/master/pokemons/${id}.png`} alt={name} className="img-responsive" />
            </Link>
          </div>
          <div>
            <Link to={`/pokemon/${id}`}>
              <h2>{name}</h2>
            </Link>
          </div>
          <div>
            <Button onClick={addToCaptured} disabled={isCaptured}>
              {isCaptured ? 'Caught' : 'Catch'}
            </Button>
          </div>
        </Col>
      );
    }
}
