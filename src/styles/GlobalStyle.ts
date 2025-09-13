import { createGlobalStyle } from "styled-components";
import type { ThemeColors } from "../types/ThemeColors";

export const GlobalStyle = createGlobalStyle<{
  theme: ThemeColors;
}>`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 0.2s ease;
  }

  .hide-in-mobile {
    @media screen and (max-width: 650px) {
       display: none;
    }
  }

  body {
    position: relative;
    font-family: 'Arial', sans-serif;
    background: ${(props) => props.theme.body?.bg};
    width: 100dvw;
    overflow-x: hidden;
}

  ul, ol, li {
    all: unset;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
`;
