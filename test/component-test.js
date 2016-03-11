import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

// Component to Test
import GameStatus from '../src/component/game_status';

const props = {
  players: ['X', 'O'],
  turn: 0,
  winner: false
};

describe('GameStatus Component', () => {

  it('should render correctly', () => {
    var gameStatus = TestUtils.renderIntoDocument(<GameStatus {...props} />);
    expect(gameStatus).toExist();
  });

  it('should display the user\'s turn', () => {
    var gameStatus = TestUtils.renderIntoDocument(<GameStatus {...props} />);
    var h4 = TestUtils.findRenderedDOMComponentWithTag(gameStatus, 'h4');
    expect(h4.textContent).toEqual('X\'s Turn');
  });

  it('should display the winner', () => {
    props.winner = 'X';
    var gameStatus = TestUtils.renderIntoDocument(<GameStatus {...props} />);
    var h2 = TestUtils.findRenderedDOMComponentWithTag(gameStatus, 'h2');
    expect(h2.textContent).toEqual('X Wins!');
  });
}); 