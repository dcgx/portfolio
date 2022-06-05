import { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
    body {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol', 'Noto Color Emoji';
    }

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
    }

    ${variables}
`

export default GlobalStyle
