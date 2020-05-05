import React from 'react';
import Route from './Route';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

const SeriesApp = props => (
  <Provider store={store}>
    <Route />
  </Provider>
);

export default SeriesApp;
