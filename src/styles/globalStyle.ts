import { createGlobalStyle } from 'styled-components'
import type { DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{theme?: DefaultTheme }`
  body, html {
    background: ${(props) => props.appBackground};
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }

  h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
  }
`
