import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../src/themes/theme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer} from "../src/store";
import '../src/i18next';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Avenir;
    src: url("../src/static/fonts/Avenir-Medium.ttf") format("truetype");
  }
  
  * {
    font-family: Avenir, sans-serif;
  }
`;

const store = configureStore({
    reducer,
})

export const decorators = [
    (Story) => (
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Story />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    ),
];