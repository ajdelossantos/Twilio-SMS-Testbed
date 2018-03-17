import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import debugScript from './debug/debug_script';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  debugScript(store, true);

  ReactDOM.render(<h1>Twilio-SMS</h1>, root);
});