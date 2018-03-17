import React from 'react';
import { Route } from "react-router-dom";

import Demo from './demo';
import MessagesIndexContainer from './messages/messages_index_container';

const App = () => (
  <main className="main">
    <Demo />
    <Route exact path="/" component={ MessagesIndexContainer } />
  </main>
);

export default App;