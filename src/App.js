import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      player1: "X",
      player2: "O",
      currentTurn: "X",
      board: [
      "", "", "", "", "", "", "", "", ""
      ]
    }
  }

  handleClick(index){
    if(this.state.board[index] === "") {
    this.state.board[index] = this.state.currentTurn
    this.setState({
      board: this.state.board,
      currentTurn: this.state.currentTurn === this.state.player1 ? this.state.player2 : this.state.player1
    })
    console.log(index);
      }
  }
  render() {
    return (
      <div className="board">
        {this.state.board.map((cell,index) =>{
          return <div onClick={this.handleClick.bind(this,index)} className="square">{cell}</div>
        })}
      </div>
    )
  }
}

export default App;
