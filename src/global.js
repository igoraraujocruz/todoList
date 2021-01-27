import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        font-family: 'Roboto Condensed', sans-serif;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    h1 {
        margin-top: 40px;
        text-align: center;
    }
`;