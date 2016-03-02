import React, { Component } from 'react';

class GameStatus extends Component {

  renderWinner(){
    if(this.props.winner === 'TIE'){
      return 'Tie Game!'
    } else if(this.props.winner){
      return `${this.props.winner} Wins!`;
    } else {
      return '';
    }
  }

  renderTurn(){
    let player = this.props.players[this.props.turn];
    return `${player}'s Turn`;
  }

  render(){
    return (
      <div>
        <p>{this.renderTurn()}</p>
        <p>{this.renderWinner()}</p>
        { this.props.winner ? 
          <button 
            onClick={this.props.clearBoard}>
            New Game
            </button> : null}
      </div>
    );
  }
};

export default GameStatus;