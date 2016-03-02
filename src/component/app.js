import React from 'react';
import Board from '../container/board';
import PlayerInfo from '../container/player_info';

const App = (props) => {
  return (
    <div>
      <Board />
      <PlayerInfo />
    </div>
  );
};

export default App;