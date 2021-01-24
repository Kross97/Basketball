import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
import './index.css';
import { App } from './App';
import reducer from './store/index';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
