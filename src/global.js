import { createGlobalStyle } from 'styled-components';
import background from './assets/background.jpeg'

export default createGlobalStyle`
    *{
        font-family: 'Roboto Condensed', sans-serif;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: url(${background}) no-repeat;
        background-size: cover;
    }
    
    h1 {
        margin-top: 40px;
        text-align: center;
    }
`;