import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './themes/theme';
import './index.css';
import { App } from './App';
import { reducer } from './store';
import reportWebVitals from './reportWebVitals';
import './i18next';

export const store = configureStore({
  reducer,
  preloadedState: {
    authDataUser: {
      authData: {
        name: localStorage.getItem('name_basketball') || '',
        avatarUrl: localStorage.getItem('avatar_basketball') || '',
        token: localStorage.getItem('token_basketball') || '',
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
