import './PokemonPageRender.css'

import React, { Component } from 'react';

import Grid  from 'react-bootstrap/lib/Grid';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class PokemonPageRender extends Component {
	render() {
	  const { name, id, status, dateCaptured, captured } = this.props;
	  return (
      <Grid className="item-block">
			  <Row className="show-grid">
					<Col xs={12} md={6} lg={6} mdOffset={3} lgOffset={3} className="text-center">
				    <img src={`https://github.com/epam-js-may-2018/homework-7-js/raw/master/pokemons/${id}.png`} alt={name} />
					  <ListGroup>
						  <ListGroupItem bsStyle="success">ID: {id}</ListGroupItem>
						  <ListGroupItem bsStyle="info">NAME: {name}</ListGroupItem>
						  <ListGroupItem bsStyle="warning">STATUS: {status}</ListGroupItem>
						  <ListGroupItem bsStyle="danger">{captured ? 'DATE CAPTURED: ' : ''}{dateCaptured}</ListGroupItem>
					  </ListGroup>
				  </Col>
			  </Row>
		  </Grid>
		);
	}
}