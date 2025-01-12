import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
  --background: rgb(109, 151, 238);
  --color-white: rgb(238, 242, 255);
  --color-black: rgb(1, 3, 19);
  --color-dark-grey: rgb(114, 112, 115);
  --color-blue: rgb(11, 132, 246);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--background);
  color: var(--color-black);
  line-height: 1.5;
  font-size: 1.6rem;
  position: relative;
  width: 100%;
}
`

export default GlobalStyles
