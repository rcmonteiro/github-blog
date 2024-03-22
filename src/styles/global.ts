import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-weight: 700;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }


  ul, ol {
    margin: 0;
    padding: 0 1rem;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  ::selection {
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
  }

  body, input, textarea, button {
    font: 400 Nunito, sans-serif;
  }
  
  button {
    border: none;
    cursor: pointer;
  }
`
