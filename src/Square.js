import React, { Component } from 'react';
import './style/style.css';

class Square extends Component {

    render() {
        return (
        <div className="square">
            <button onClick={() => this.props.onClick()} 
                className="square">{this.props.value}</button>
        </div>);
    }
}

export default Square