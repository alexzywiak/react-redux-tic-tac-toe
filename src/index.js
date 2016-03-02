import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ticTacToeApp from './reducer';
import App from './component/App';

let store = createStore(ticTacToeApp);

render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);