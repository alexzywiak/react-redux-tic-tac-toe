export const markSquare = (board, pos, mark) => {
  let {x, y} = pos;
  return [
  ...board.slice(0, x),
  [
  ...board[x].slice(0, y),
  mark,
  ...board[x].slice(y + 1)
  ],
  ...board.slice(x + 1)
  ];
};

export const takeTurn = ({turn}) => {
  return (turn) ? 0 : 1;
};

export const getMark = ({players, turn}) => {
  return players[turn];
};

export const checkLinesForWinner = (lines) => {
  return lines.reduce((isWinner, line) => {
    if(!isWinner){
      return isWinningLine(line);
    } else {
      return isWinner;
    }
  }, false);
};

export const isWinningLine = (line) => {
  return line.reduce((previous, item) => {
    if(previous && previous === item){
      return previous;
    } else {
      return false;
    }
  });
};

export const checkCols = (board) => {
  let cols = [];
  for(let i = 0; i < board.length; i++){
    cols.push(board.map(row => row[i]));
  }

  return checkLinesForWinner(cols);
};

export const checkRows = (board) => {
  return checkLinesForWinner(board);
};

export const checkDiags = (board) => {
  let major = [];
  let minor = [];

  board.forEach((item, i) => {
    major.push(board[i][i]);
    minor.push(board[i][board.length - i - 1]);
  });

  return checkLinesForWinner([major, minor]);
};

export const checkWinner = (board) => {
  return checkCols(board) || checkRows(board) || checkDiags(board) || checkTie(board);
};

export const checkTie = (board) => {
  return board.reduce((isTie, row) => {

    if(!isTie){
      return false;
    } else {
      return row.reduce((isFull, square) => {
        if(!isFull){
          return false;
        } else {
          if(square !== ''){
            return isFull;
          }
        }
      }, 'TIE');
    }
  }, 'TIE');
};


