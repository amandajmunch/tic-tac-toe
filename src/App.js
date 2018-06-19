import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      player1: "X",
      player2: "O",
      currentTurn: "X",
      winner: null,
      board: [
      "", "", "", "", "", "", "", "", ""
      ]
    }
  }

calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

  handleClick(index){
    if(this.calculateWinner(this.state.board) || this.state.board[index]) {
      return;
    }
    if(this.state.board[index] === "") {
    this.state.board[index] = this.state.currentTurn
    this.setState({
      board: this.state.board,
      currentTurn: this.state.currentTurn === this.state.player1 ? this.state.player2 : this.state.player1
    })
    console.log(index);
      }
  }

  resetGame(){
    window.location.reload();
  }
  render() {
    const winner = this.calculateWinner(this.state.board);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.currentTurn);
    }

    return (
      <div className="game">
        <div className="header">
          <div className="status">{status}</div>
          <button onClick={this.resetGame}>New Game</button>
        </div>
        <div className="board">
          {this.state.board.map((cell,index) =>{
            return <div onClick={this.handleClick.bind(this,index)} className="square">{cell}</div>
          })}
        </div>
      </div>
    )
  }
}

export default App;
