import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Content, MainMenu, GameBoard, Statistics } from 'components'
import { configureStore, reportWebVitals, register } from 'core';
import { GlobalStyles, theme } from 'styles'
import { BrowserRouter, Route } from 'react-router-dom';

const { persistor, store } = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Content>
            <MainMenu />
            <Route path='/sudoku-game' component={GameBoard} />
            <Route path='/statistics' component={Statistics} />

          </Content>

        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
register()