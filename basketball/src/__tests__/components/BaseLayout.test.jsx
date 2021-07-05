import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import BaseLayout from '../../components/BaseLayout';
import { reducer } from '../../store';
import '../../i18next';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../themes/theme';

const store = configureStore({
  reducer,
});

const wrapper = (component) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        {component}
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);

test('BaseLayout test', () => {
  const { getByText } = render(wrapper(<BaseLayout />));
  expect(getByText(/Players/i)).toBeInTheDocument();
});
