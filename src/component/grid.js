import React, { Component } from 'react';

class Grid extends Component {
  renderBoard(){
    return this.props.board.map( (row, x) => {
      return (
        <tr key={x}>
          {row.map( (square, y) => {
            return (
              <td
                key={y}
                onClick={() => {
                  this.props.onSquareClick({x, y});
                }}
              >
                { square }
              </td>
            );
          })}
        </tr>
      );
    })
  }

  render(){
    return (
      <div className="row game-board">
        <div className="col-md-12">
          <table className="table table-bordered">
            <tbody>{this.renderBoard()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Grid;