import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-body: #f0f2f5;
        --text-light: #b8bdc8;

        --background: #1e111b;

        --input-background: #e7e9ee;
        --input-border-color: #d7d7d7; 
    }
    
    * {
        box-sizing: border-box;

        padding: 0;
        margin: 0;

        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;
    }

    // font-size: 16px (Desktop)
    html {
        @media only screen and (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media only screen and (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;

        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }

    body, input, textarea, button {
        font-family: "Inter", Arial, Helvetica, sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
        color: var(--text-body);
    }

    li {
      list-style: none;
    }

    a {
      color: var(--text-body);
    
      &:hover {
        filter: brightness(50%);
      }
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .underlineNone {
        text-decoration: none;
    }
`;