import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-base: 'Roboto', sans-serif;

    --primary-color: #edf2f8;
    --secondary-color: #313bac;

    --black-color: #030303;
    --white-color: #ffffff;
    --brown-color: #46364a;

    --gray-color: #6b7688;
    --lightGray-color: #e4e4e4;
  }

  html {
    scroll-behavior: smooth;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    font-family: var(--font-base), sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
export default GlobalStyles
