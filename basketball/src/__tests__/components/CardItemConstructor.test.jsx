import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { theme } from '../../themes/theme';
import { CardItemConstructor } from '../../components/cardComponents/CardItemConstructor';
import { reducer } from '../../store';

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

test('CardItemConstructor test', () => {
  const player = {
    name: 'name1',
    number: 'number1',
    position: 'pos1',
    team: 'team1',
    birthday: 'birthday1',
    height: 'height1',
    weight: 'weight1',
    avatarUrl: 'avatarUrl1',
    id: 'id1',
  };
  const { getByText } = render(wrapper(<CardItemConstructor type="player" item={player} />));
  expect(getByText('#number1')).toBeInTheDocument();
  expect(getByText('name1')).toBeInTheDocument();
});
