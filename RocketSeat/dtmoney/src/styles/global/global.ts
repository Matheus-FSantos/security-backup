import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-light: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;

        --input-background: #e7e9ee;
        --input-border-color: #d7d7d7; 
    }
    
    * {
        box-sizing: border-box;

        padding: 0;
        margin: 0;
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
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content {
        max-width: 576px;
        width: 100%;

        background: var(--background);
        padding: 3rem;
        position: relative;
        
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.15s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;
