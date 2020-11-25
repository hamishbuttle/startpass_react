import { createGlobalStyle } from "styled-components";
import token from "../designToken";
import downArrow from "../images/down_arrow.png";

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
            font-size: 2.8rem
        }
        ${token.layout.media.desktop} {
            font-size: 3rem
        }
        ${token.layout.media.desktopLg} {
            font-size: 3.2rem
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
        font-size: 1.1rem;
        font-weight: 700;
        max-width: 400px;
        margin: 1rem auto 2rem auto;
        color: ${token.colors.gray.dark};
        ${token.layout.media.tablet} {
            font-size: 1.6rem
        }        
        span {
        color: ${token.colors.primary.primary};
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
      width :100%;
  }
  li {
      list-style: none;
  }
  input, select, option {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    width: 100%;
    display: block;
    /* background: white; */
    padding: .8rem 1rem;
    height: 56px;
    box-shadow: 2px 2px 16px rgba(0,0,0,.1);
    border-radius: 14px;
    border: 1px solid #f9f9f9;
    font-family: museo-sans-rounded, sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: ${token.colors.gray.darkest}
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(${downArrow});
    background-position: right 14px top 50%;
    background-size: 14px;
    background-repeat: no-repeat;
  }

  select::-ms-expand {
      display: none;
  }

  .splash {
        height: 100vh;
        width: 100%;
        background: ${token.colors.primary.primaryGradient};
        position: relative;
        overflow:hidden;
        position: fixed;
  }
  .wrapper {
    margin: auto;
    max-width: 580px;
  }
  .btn-primary {
    width: 100%;
    border-radius: 14px;
    background: ${token.colors.primary.primaryGradient};
    color: white;
    text-align: center;
    display: inline-block;
    padding: .8rem 2rem;
    height: 48px;
    border: none;
    font-size: 17px;
    margin: auto;
    font-weight: 900;
    text-transform: uppercase;
    font-family: museo-sans-rounded, sans-serif;
    letter-spacing: .4px;
    transition: all .4s ease-out;
    filter: drop-shadow(0px 3.02041px 18.1224px rgba(0, 0, 0, 0.16));
    ${token.layout.tablet} {
      height: 56px;
    }
  }
  button:disabled,
  button[disabled]{
    color: rgba(255,255,255, .5);
  }

  .btn-close-container {
    position: fixed;
    bottom: 1.6rem;
    left:50%;
    transform: translateX(-50%);
    width: 56px;
    height: 56px;
    z-index: 5;
  }
  .btn-close {
    border-radius: 24px;
    background: white;
    border: none;
    box-shadow: 2px 2px 32px rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 100%;
    img {
      width: 48%;
    }
  }
`;

export default GlobalStyle;
