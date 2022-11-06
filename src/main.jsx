import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import App from './App';

const GlobalStyle = createGlobalStyle`
${reset}
/* other styles */
body {
overflow-x: hidden;
line-height: 1;
font-family: -apple-system, BlinkMacSystemFont, «Segoe UI», «Roboto», «Oxygen»,
«Ubuntu», «Cantarell», «Fira Sans», «Droid Sans», «Helvetica Neue»,
sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
html, body {
cursor: none;
background-color: #ffffff;
}
*{
min-height: 0;
min-width: 0;
box-sizing: border-box;
-webkit-backface-visibility: hidden;
}
img {
display: block;
width: 100%;
height: auto;
}
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
