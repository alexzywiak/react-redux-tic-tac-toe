import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearBoard } from '../action/index';
import GameStatus from '../component/game_status';

class PlayerInfo extends Component {
  render(){
    return (
        <GameStatus
          {...this.props}
        />
      );
  }
}

const mapStateToProps = ({turn, winner, players}) => {
  return {
    turn,
    winner,
    players
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({clearBoard}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);