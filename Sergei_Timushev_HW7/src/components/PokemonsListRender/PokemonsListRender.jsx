import './PokemonsListRender.css'

import React, { Component, Fragment } from 'react';
import PokemonItem from '../../containers/PokemonItem.jsx';

import Button  from 'react-bootstrap/lib/Button';
import Grid  from 'react-bootstrap/lib/Grid';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';

export default class PokemonsListRender extends Component {
    render() {
        const { pokemons, loadPokemons, showBtn } = this.props;

        return (
            <Fragment>
                <Grid className="margin-section">
                    <Row className="show-grid">
                        {pokemons.map((pokemon) => <PokemonItem key={pokemon.id} name={pokemon.name} id={pokemon.id} />)}
                    </Row>
                    <Col md={12} className="load-more-btn">
                        <Button onClick={loadPokemons} bsStyle="primary" bsSize="large" disabled={showBtn ? false : true} className={showBtn ? "show-btn" : "hide-btn"} >Load More</Button>
                    </Col>
                </Grid>
            </Fragment>
        );
    }
}