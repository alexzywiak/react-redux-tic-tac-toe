export const markSquare = (pos) => {
  return {
    type: 'MARK_SQUARE',
    pos
  }
}

export const clearBoard = () => {
  return {
    type: 'CLEAR_BOARD'
  }
}