import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import PokemonsList from './containers/PokemonsList.jsx'
import PokemonPage from './containers/PokemonPage.jsx'
import Captured from './components/Captured'

class App extends Component {
	render() {
		return (
			<Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={PokemonsList} />
          <Route exact path='/pokemon/:id' component={PokemonPage} />
          <Route exact path='/captured-pokemons' component={Captured}/>
			  </Switch>
			</Fragment>
		);
	}
}

ReactDom.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('app'));
