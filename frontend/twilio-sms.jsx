import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import debugScript from './debug/debug_script';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  debugScript(store, true);

  ReactDOM.render(<Root store={ store }/>, root);
});