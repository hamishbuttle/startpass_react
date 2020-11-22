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
        font-size: 2rem;
        font-weight: 1000;
        text-transform: uppercase;
        margin: 1rem auto;
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
        font-size: 1.2rem;
        font-weight: 700;
        max-width: 560px;
        margin:  auto;
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
  .btn-primary {
        border-radius: 19px;
        background: ${token.colors.primary.primaryGradient};
        color: white;
        text-align: center;
        display: inline-block;
        padding: .8rem 2rem;
        border: none;
        font-size: 19px;
        margin: 2rem auto;
        font-weight: 900;
        text-transform: uppercase;
        font-family: museo-sans-rounded, sans-serif;
        letter-spacing: .4px;
        /* filter: drop-shadow(0px 3.02041px 18.1224px rgba(0, 0, 0, 0.16)); */
  }
  .btn-close-container {
    position: fixed;
    bottom: 5%;
    left:50%;
    transform: translateX(-50%);
  }
  .btn-close {
    border-radius: 24px;
    background: white;
    border: none;
    box-shadow: 2px 2px 32px rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items:center;
    width: 56px;
    height: 56px;
  }
`;

export default GlobalStyle;
