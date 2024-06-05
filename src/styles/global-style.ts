import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.google.com/share?selection.family=Montserrat:ital,wght@0,100..900;1,100..900');

    :root {
        font-size: 64.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', Arial, sans-serif;
        color: #333333;
        background-color: ${({ theme }) => theme.color.primary};
        -webkit-font-smoothing: antialiased;
    }

    button div a {
        outline: none;
    }

    p {
        margin: 0;
    }
    
`;

export default GlobalStyle;
