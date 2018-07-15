import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import ReduxThunk from 'redux-thunk';
// import { DrizzleProvider } from 'drizzle-react'
import reducers from './reducers';
import { theme } from './styles/Theme';

import Home from './containers/Home';

import './App.css';

const muiTheme = createMuiTheme({
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 300,
  },
  overrides: {
    MuiButton: {
      flatPrimary: {
        color: theme.successColor,
      },
      raisedPrimary: {
        '&:hover': {
          backgroundColor: theme.successColor,
        },
        backgroundColor: theme.successColor,
      },
    },
  },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={muiTheme}>
            <Home />
          </MuiThemeProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
