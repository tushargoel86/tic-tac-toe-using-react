import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {

    constructor() {
        super();

        this.state = {
           squares:  Array(9).fill(null),
           isXNext : true  
        };
    }

    handleClick(i) {
        //dont want to modify original array
        const squares = this.state.squares.slice();
        
        //dont want to refill the square or once we have winner
        if (this.calculateWinner(squares) || squares[i]) return;

        //choosing player alternatively
        squares[i] =  this.state.isXNext ? 'X' : 'O';
        
        this.setState({squares: squares, isXNext: !this.state.isXNext});
    }

    getSquares(i) {
        return <Square onClick={() => this.handleClick(i)} value={this.state.squares[i]} />
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner)
            status = 'winner is ' + winner;
        else
            status = 'Next Player: ' + (this.state.isXNext ? 'X' : 'O');
        return (<div>   
            <div className="status">{status}</div>     
            <div className="board-row">
                {this.getSquares(0)}
                {this.getSquares(1)}
                {this.getSquares(2)}
            </div>
            <div className="board-row">
                {this.getSquares(3)}
                {this.getSquares(4)}
                {this.getSquares(5)}
            </div>
            <div className="board-row">
                {this.getSquares(6)}
                {this.getSquares(7)}
                {this.getSquares()}
            </div>
        </div>
        );
    }

    calculateWinner(squares) {
        const winnerPositions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for (let position = 0; position < winnerPositions.length; position++) {
            const [a, b, c] = winnerPositions[position];
            //check all winner combination occured by same player
            if (squares[a] && squares[b] === squares[a] && squares[c] === squares[a]) {
                return squares[a];
            }
        }
        return null;
    }
}

export default Board;