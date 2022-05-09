import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        width: 100%;
        overflow-x: hidden;
    }
    a {
        text-decoration: none;
        color: black;
    }
    @keyFrames animateDown {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(5px);
        }
        60% {
            transform: translateY(3px);
        }
    }
`