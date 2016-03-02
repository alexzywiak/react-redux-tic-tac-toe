import { expect } from 'chai';
import * as actions from '../src/action/index';

describe('Actions', () => {
  it('should create a MARK_SQUARE action', () => {
    
    const pos = {
      x:0,
      y:0
    };

    const expectedAction = {
      type: 'MARK_SQUARE',
      pos
    };

    expect(actions.markSquare(pos)).to.eql(expectedAction);
  });

  it('should create a CLEAR_BOARD action', () => {
    
    const expectedAction = {
      type: 'CLEAR_BOARD'
    };

    expect(actions.clearBoard()).to.eql(expectedAction);
  });
});