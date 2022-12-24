import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #141414;
  color: #FFF;
}

body, input, button, a {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  color: #FFF;
  font-weight: 700;
}
a {
  text-decoration: none;
  color: #FFF;
}


`

export default {GlobalStyle}