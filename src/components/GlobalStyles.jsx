import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`

:root {
  --color-main-one: #65ffdd;
    --color-main-two: #5cd8ff;
  --gradient-section: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(202, 240, 248, 0.8) 0%,
    rgba(173, 232, 244, 0.8) 90%
  );
  --shadow-section: 0px 0px 5px rgba(100, 150, 200, 0.9);
  --timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  margin: 10px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   background: linear-gradient(
    to right,
    var(--color-main-two),
    var(--color-main-one)
  );
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
button {
  cursor: pointer;
}
address {
  font-style: normal;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
li {
  list-style: none;
}
`;
