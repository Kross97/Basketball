import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../src/themes/theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Avenir;
    src: url("../src/static/fonts/Avenir-Medium.ttf") format("truetype");
  }
  
  * {
    font-family: Avenir, sans-serif;
  }
`;

export const decorators = [
    (Story) => (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Story />
            </ThemeProvider>
        </BrowserRouter>
    ),
];