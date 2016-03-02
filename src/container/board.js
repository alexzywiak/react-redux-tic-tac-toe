import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { markSquare } from '../action/index';
import Grid from '../component/grid';

class Board extends Component {

  render(){
    return (
      <Grid board={this.props.board} onSquareClick={this.props.markSquare} />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({markSquare}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
