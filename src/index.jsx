// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

//reducers
import messagesReducer from './reducers/messages-reducer.js';
import channelsReducer from './reducers/channels-reducer.js';
import selectChannelReducer from './reducers/select-channel-reducer.js';
import currentUserReducer from './reducers/current-user-reducer.js';
import createMessageReducer from './reducers/create-message-reducer.js';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Set initial state
const initialState = {
  messages: [],
  channels: ["general", "react", "paris"],
  selectedChannel: "general",
  currentUser: window.prompt("Please enter a cool username")
}

// State and reducers
const reducers = combineReducers({
  createMessage: createMessageReducer,
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectChannelReducer,
  currentUser: currentUserReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
