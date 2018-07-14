import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Home from './containers/Home';

import './App.css';

const muiTheme = createMuiTheme({
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 300,
  },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <Home />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
