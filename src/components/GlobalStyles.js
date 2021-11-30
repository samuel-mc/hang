import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
    :root {
        --primary-color: #2f2c52;
        --secondary-color: #3e3b64;
        --tertiary-color: #5665fb;
        --orange: #fd6c22;
        --white: #ffffff;
    }
    
    body {
        background-color: var(--primary-color);
    }

`

export default GlobalStyles;