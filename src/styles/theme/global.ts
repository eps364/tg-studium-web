import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* https://github.com/eps364/the-new-css-reset */
    *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
    all: unset;
    display: revert;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a, button {
        cursor: revert;
    }

    ol, ul, menu {
        list-style: none;
    }

    img {
        max-width: 100%;
    }

    table {
        border-collapse: collapse;
    }

    textarea {
        white-space: revert;
    }

    meter {
        -webkit-appearance: revert;
        appearance: revert;
    }

    ::placeholder {
        color: unset;
    }

    :where([hidden]) {
        display: none;
    }

    :where([contenteditable]) {
        -moz-user-modify: read-write;
        -webkit-user-modify: read-write;
        overflow-wrap: break-word;
        -webkit-line-break: after-white-space;
    }

    :where([draggable="true"]) {
        -webkit-user-drag: element;
    }

    input[type="checkbox"],
    input[type="radio"] {
        all: revert;
    }

    input,
    textarea,
    select {
    all: revert;
    }

    /* inital theme */
    html {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.neutral};
        background-color: ${({ theme }) => theme.second40};
    }

`;