import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        list-style: none;
        font-family: "Montserrat", sans-serif;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        color: var(--color-normal);
        background: transparent;
    }

    html {
        width: 100%;
        min-height: 100%;
        background: #1a1c22;
    }

    body {
        --dark: #1a1c22;
        --content: #31363F;
        --light: #31363f;

        --color-normal: #9da5b4;
        --color-hovered: #f5f5f5;
        --color-primary: #85cff9;

        --font-normal: 1.1em;
        --font-small: 0.8em;
        --font-big: 1.5em;

        --transition: all 0.2s ease-in-out;
    }

    #root {
        text-align: center;
    }

    a, button{
        cursor: pointer;
    }

    *.appear{
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
    }
    *.hidden{
        visibility: hidden;
        opacity: 0;
        transform: translateX(-150px);
    }
`;
