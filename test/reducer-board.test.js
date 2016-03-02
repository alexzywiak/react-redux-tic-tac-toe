import {expect} from 'chai';
import reducer from '../src/reducer/index';

describe('ticTacToe reducer', () => {
  let state;
  const initialBoard = [['', '', ''], ['', '', ''], ['', '', '']];
  const winningBoard = [['X', 'X', 'X'], ['O', '', 'O'], ['', '', '']];
  const losingBoard = [['X', 'O', 'X'], ['O', '', ''], ['', 'X', '']];
  

  beforeEach(() => {
    state = {
      board: initialBoard,
      winner: false,
      players: ['X', 'O'],
      turn: 0
    };
  });

  it('should return initial state', () => {

    expect(
      reducer(undefined, {})
      ).to.eql(state);
  });

  it('should pass a given board', () => {

    let board = [['X', '', ''], ['', '', ''], ['', '', '']];
    state.board = board;

    expect(
      reducer(state, {}).board
      ).to.eql(
      board
      )
    })

  describe('MARK_SQUARE', () => {
    it('should mark an empty square', () => {

      let action = {
        type: 'MARK_SQUARE',
        pos: {
          x: 0,
          y: 0
        }
      }

      let result = reducer(undefined, action)

      expect(
        result.board[0][0]
        ).to.equal(
        'X'
        )
      });

    it('should not mark a used square', () => {

      let board = [['', '', ''], ['X', '', ''], ['', '', '']]
      state.board = board;

      let action = {
        type: 'MARK_SQUARE',
        pos: {
          x: 1,
          y: 0
        }
      };

      let result = reducer(state, action);

      expect(
        result.board[1][0]
        ).to.equal(
        'X'
        )
      });

    describe('Turns', () => {

      it('should change player turn after a successful move', () => {
        let action = {
          type: 'MARK_SQUARE',
          pos: {
            x: 1,
            y: 0
          }
        };

        let result = reducer(state, action);

        expect(result.turn).to.equal(1);
      });

      it('should not change player turn after an unsuccessful move', () => {
        let actions = [{
          type: 'MARK_SQUARE',
          pos: {
            x: 1,
            y: 0
          },
          type: 'MARK_SQUARE',
          pos: {
            x: 1,
            y: 0
          }
        }];

        let result = actions.reduce(reducer, undefined);
        expect(result.turn).to.equal(1);
      });

      it('should use different marks for each player', () => {
        let board = [['X', 'O', ''], ['', '', ''], ['', '', '']];

        let actions = [{
          type: 'MARK_SQUARE',
          pos: {
            x: 0,
            y: 0
          }
        }, {
          type: 'MARK_SQUARE',
          pos: {
            x: 0,
            y: 1
          }
        }];

        let result = actions.reduce(reducer, undefined);
        expect(result.board).to.eql(board);
      });
    });

    describe('check for winner', () => {
      it('should recognize a winning board', () => {
        let board = [['X', 'X', ''], ['', '', ''], ['', '', '']];

        state.board = board;

        let action = {
          type: 'MARK_SQUARE',
          pos: {
            x: 0,
            y: 2
          }
        };

        let result = reducer(state, action);

        expect(result.winner).to.equal('X');

      });

      it('should recognize a non winning board', () => {
        let board = [['X', 'O', ''], ['', '', ''], ['', '', '']];

        state.board = board;

        let action = {
          type: 'MARK_SQUARE',
          pos: {
            x: 2,
            y: 2
          }
        };

        let result = reducer(state, action);

        expect(result.winner).to.equal(false);

      });

      it('should recognize a tie board', () => {
        let board = [['', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']];

        state.board = board;

        let action = {
          type: 'MARK_SQUARE',
          pos: {
            x: 0,
            y: 0
          }
        };

        let result = reducer(state, action);

        expect(result.winner).to.equal('TIE');

      });
    });
  });


  describe('CLEAR_BOARD', () => {
    it('should clear the board', () => {

      let mark = {
        type: 'MARK_SQUARE',
        pos: {
          x: 1,
          y: 0
        }
      };

      let clear = {
        type: 'CLEAR_BOARD'
      };

      let result = reducer(undefined, mark);
      result = reducer(result, clear);

      expect(result).to.eql(state);
    })
  });

});