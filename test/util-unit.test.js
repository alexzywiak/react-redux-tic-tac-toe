// import {expect} from 'chai';
// import * as utils from '../src/reducer/utils';



// describe('Utils', () => {

//   const initialBoard = [['', '', ''], ['', '', ''], ['', '', '']];
//   const winningCols = [['O', '', 'O'], ['X', '', 'O'], ['X', '', 'O']];
//   const winningRows = [['X', 'O', 'X'], ['O', '', ''], ['X', 'X', 'X']];
//   const winningDiagMajor = [['X', 'O', 'X'], ['O', 'X', ''], ['', 'X', 'X']];
//   const winningDiagMinor = [['X', 'O', 'X'], ['O', 'X', ''], ['X', 'X', '']];

//   const loserBoard = [['X', 'O', 'X'], ['O', 'X', ''], ['O', '', '']];
//   const tieBoard = [['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']];

//   describe('markSquare', () => {
//     it('should mark a given square', () => {
//       let expectedBoard = [['X', '', ''], ['', '', ''], ['', '', '']];
//       let actualBoard = utils.markSquare(initialBoard, {x:0, y:0}, 'X');
//       expect(actualBoard).to.eql(expectedBoard);
//     });
//   });

//   describe('isWinningLine', () => {
//     it('should return winner if given a winning line', () => {
//       let line = ['X', 'X', 'X'];
//       expect(utils.isWinningLine(line)).to.equal('X');
//     });

//     it('should return false if not given a winning line', () => {
//       let line = ['X', 'X', 'O'];
//       expect(utils.isWinningLine(line)).to.equal(false);
//     });

//     it('should return false if given an empty line', () => {
//       let line = ['', '', ''];
//       expect(utils.isWinningLine(line)).to.equal(false);
//     });
//   });

//   describe('checkLinesForWinner', () => {
//     it('should return winner if given one winning line', () => {
//       let lines = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
//       expect(utils.checkLinesForWinner(lines)).to.equal('X');
//     });

//     it('should return false if not given a winning line', () => {
//       let lines = [['X', 'X', 'O'], ['', '', ''], ['', '', '']];
//       expect(utils.checkLinesForWinner(lines)).to.equal(false);
//     });

//     it('should return false if given empty lines', () => {
//       let lines = [['', '', ''], ['', '', ''], ['', '', '']];
//       expect(utils.checkLinesForWinner(lines)).to.equal(false);
//     });
//   });

//   describe('checkLinesForWinner', () => {
//     it('should return winner if given one winning line', () => {
//       let lines = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
//       expect(utils.checkLinesForWinner(lines)).to.equal('X');
//     });

//     it('should return false if not given a winning line', () => {
//       let lines = [['X', 'X', 'O'], ['', '', ''], ['', '', '']];
//       expect(utils.checkLinesForWinner(lines)).to.equal(false);
//     });

//     it('should return false if given empty lines', () => {
//       let lines = [['', '', ''], ['', '', ''], ['', '', '']];
//       expect(utils.checkLinesForWinner(lines)).to.equal(false);
//     });
//   });

//   describe('checkRows', () => {
//     it('should return winner given a board with a winning row', () => {
//       expect(utils.checkRows(winningRows)).to.equal('X');
//     });

//     it('should return false if not given a winning row', () => {
//       expect(utils.checkRows(winningDiagMajor)).to.equal(false);
//     });

//     it('should return false if given an empty board', () => {
//       expect(utils.checkRows(initialBoard)).to.equal(false);
//     });
//   });

//   describe('checkCols', () => {
//     it('should return winner given a board with a winning column', () => {
//       expect(utils.checkCols(winningCols)).to.equal('O');
//     });

//     it('should return false if not given a winning column', () => {
//       expect(utils.checkCols(winningDiagMajor)).to.equal(false);
//     });

//     it('should return false if given an empty board', () => {
//       expect(utils.checkCols(initialBoard)).to.equal(false);
//     });
//   });

//   describe('checkDiags', () => {
//     it('should return winner given a board with a winning major diagonal', () => {
//       expect(utils.checkDiags(winningDiagMajor)).to.equal('X');
//     });

//     it('should return winner given a board with a winning minor diagonal', () => {
//       expect(utils.checkDiags(winningDiagMinor)).to.equal('X');
//     });

//     it('should return false if not given a winning diagonal', () => {
//       expect(utils.checkDiags(winningRows)).to.equal(false);
//     });

//     it('should return false if given an empty board', () => {
//       expect(utils.checkDiags(initialBoard)).to.equal(false);
//     });
//   });

//   describe('checkTie', () => {
//     it('should return TIE given a full board', () => {
//       expect(utils.checkTie(tieBoard)).to.equal('TIE');
//     });

//     it('should return false given an empty board', () => {
//       expect(utils.checkTie(initialBoard)).to.equal(false);
//     });

//     it('should return false if given a partially full board', () => {
//       expect(utils.checkTie(loserBoard)).to.equal(false);
//     });
//   });

//   describe('checkWinners', () => {
//     it('should return winner given a board with three in a row', () => {
//       expect(utils.checkWinner(winningDiagMajor)).to.equal('X');
//       expect(utils.checkWinner(winningCols)).to.equal('O');
//       expect(utils.checkWinner(winningRows)).to.equal('X');
//     });

//     it('should return false given a board without three in a row', () => {
//       expect(utils.checkWinner(loserBoard)).to.equal(false);
//     });

//     it('should return TIE if given a full board without three in a row', () => {
//       expect(utils.checkWinner(tieBoard)).to.equal('TIE');
//     });

//     it('should return false if given an empty board', () => {
//       expect(utils.checkWinner(initialBoard)).to.equal(false);
//     });
//   });

// });