import React, { Component, Fragment } from 'react';

export default class Couter extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            counter: 1
        };
    }

    handleMinusClick = (even) => {
        const counter = this.state;
        this.setState({
            counter: counter - 1
        })
    }

    handlePlusClick = (even) => {
        const counter = this.state;
        this.setState({
            counter: counter + 1
        })
    }

    render() {
        const { match } = this.state;
		const { counter } = this.state;
		
        return (
            <Fragment>
                <button onClick={this.handleMinusClick}>-</button>
                {counter}
                <button onClick={this.handlePlusClick}>+</button>
            </Fragment>
        );            
    };
}