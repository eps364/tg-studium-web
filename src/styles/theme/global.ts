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
        color: ${({ theme }) => theme.neutralLight};
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
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.background};
    }

    h1{
        font-size: calc(7 * (1.33rem)) ;
        font-weight: 500 ;
            }

    h2{
        font-size: calc(5 * (1.33rem));
    }

    h3{
        font-size: calc(4 * (1.33rem));
    }

    h4{
        font-size: calc(3 * (1.33rem));
    }

    h5{
        font-size: calc(2 * (1.33rem));
    }

    h6{
        font-size: calc(1 * (1.33rem));
    }

    p{
        font-size: calc(1 * (1.33rem));
        width: 100%;
    }

    button.sucess{
        color: ${({ theme }) => theme.sucess};
        &:hover{
            color: ${({ theme }) => theme.sucessLight};
        }
    }

    button.warning{
        color: ${({ theme }) => theme.warning};

        &:hover{
            color: ${({ theme }) => theme.warningLight};
        }
    }

    button.error{
        color: ${({ theme }) => theme.error};
        &:hover{
            color: ${({ theme }) => theme.errorLight};
        }
    }

    button.info{
        color: ${({ theme }) => theme.info};
        &:hover{
            color: ${({ theme }) => theme.infoLight};
        }
    }

    div{
        
    }

    div.container{
        
    }

    nav{
        width: 100vw;
        height: 3rem;
        display: flex;
        position: fixed;
        
        z-index: 99;
        color: ${({ theme }) => theme.background};
        background-color: ${({ theme }) => theme.primary};
        a {
            margin: auto 20px auto 40px;
            text-decoration: none;
            font-weight: bold;
            color: ${({ theme }) => theme.background};
            background-color: ${({ theme }) => theme.primary};
        }
        li {
            float: left;
            list-style: none;
            margin-left: 20px;
            color: ${({ theme }) => theme.background};
            background-color: ${({ theme }) => theme.primary};
        }
        
    }

    
`;