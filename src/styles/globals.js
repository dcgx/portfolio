import { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
    * {

    }

    html {
        
    }

    body {
        background: ${({ theme }) => theme.bg.default};
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol', 'Noto Color Emoji';
    }

    h1 {
        font-size: 2rem;
        font-weight: 600;
    }

    h6{
        font-size: 1.2rem;
        font-weight: 500;
    }

    time {
        font-size: 1rem;
        font-weight: 300;
    }
/* 
    body::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
    }

    body::-webkit-scrollbar {
        width: 10px;
        background-color: #f5f5f5;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #000000;
        border: 2px solid #555555;
    } */

    ${variables}
`

export default GlobalStyle
