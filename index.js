import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import { createStore, applyMiddleware } from 'redux';
import newsfeedApp from './src/reducers/newsfeedApp'

// Create redux store
const store = createStore(
  newsfeedApp
);

store.subscribe(newsfeedApp);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
