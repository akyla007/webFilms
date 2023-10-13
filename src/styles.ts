import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
      font-family: Poppins,sans-serif;
      background-color: var(--background-color);
      color: #FFF;
      -webkit-font-smoothing: antialiased;


      --font-color: #FFF7D4;
      --background-color: #101010;
      --dark-yellow: #C07F00;
      --light-yellow: #FFD95A;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
`;
