import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        /* Colors */
        --primary-color: #2f2c52;
        --secondary-color: #3e3b64;
        --tertiary-color: #5665fb;
        --orange: #fd6c22;
        --white: #ffffff;

        /* Font Type */
        --font-family: 'Open Sans', sans-serif;

        /* Font Size */
        --sm: 1.6rem;
        --md: 2.4rem;
        --lg: 3.2rem;
    }
    
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        font-family: var(--font-family);
    }
    
    body {
        background-color: var(--primary-color);
    }

    .app {
        position: relative;
    }

`;

export default GlobalStyles;
