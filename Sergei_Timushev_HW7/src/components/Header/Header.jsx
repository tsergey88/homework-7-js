import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/lib/Navbar';

export default class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Pokedex</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <ul className="nav nav-pills navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/captured-pokemons">Captured Pokemons</Link></li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
