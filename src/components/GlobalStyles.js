import { createGlobalStyle } from "styled-components";
import token from "../designToken";

const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: museo-sans-rounded, sans-serif;
  }
  h1, h2, h3 {
    color: ${token.colors.primary.black};
  }
  h1 {
        font-size: 2.8rem;
        font-weight: 1000;
        text-transform: uppercase;
        margin-bottom: 2rem;
        ${token.effects.shadow.light};
        ${token.layout.media.tablet} {
            font-size: 3.6rem
        }
        ${token.layout.media.desktop} {
            font-size: 3.8rem
        }
        ${token.layout.media.desktopLg} {
            font-size: 4rem
        }
        span {
            background: ${token.colors.primary.primaryGradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    h2 {
        font-size: 2.4rem;
        font-weight: 1000;
        text-transform: uppercase;
        max-width: 420px;
        margin: 1rem auto 2.4rem auto;
        span {
            background: ${token.colors.primary.primaryGradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    h3 {
        font-size: 1.4rem;
        font-weight: 700;
        max-width: 560px;
        margin: 1rem auto 2.8rem auto;
        line-height: 2.2rem;
        ${token.layout.media.tablet} {
            font-size: 1.6rem
        }
    }
    p {
        margin: 1.6rem auto;
        max-width: 560px;
        font-size: 24px;
        line-height: 1.2;
        color: ${token.colors.gray.dark};
    }
  a {
      text-decoration: none;
  }
  img { 
      display: block;
  }
  li {
      list-style: none;
  }
  .splash {
        height: 100vh;
        width: 100%;
        background: ${token.colors.primary.primaryGradient};
        position: relative;
    }
  .btn-close {
    border-radius: 24px;
    background: white;
    width: 56px;
    height: 56px;
    position: fixed;
    bottom: 10%;
    left:50%;
    transform: translateX(-50%);
    border: none;
    box-shadow: 2px 2px 32px rgba(0,0,0,.3);
  }
`;

export default GlobalStyle;
