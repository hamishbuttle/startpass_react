import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//assets
import token from "../designToken";
import logo from "../images/startpass_logo.svg";
import play from "../images/play.svg";

const Home = () => {
  return (
    <div className="splash">
      <Nav>
        <motion.div className="nav-contents">
          <div className="logo-container">
            <motion.img
              src={logo}
              alt="startpass"
              whileHover={{ opacity: 0.6 }}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1 }
              }}
            />
          </div>
          <div className="about-btn-container">
            <motion.div
              className="about-btn"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0.4 }}
              animate={{
                scale: 1,
                transition: { duration: 1 }
              }}
            ></motion.div>
          </div>
        </motion.div>
      </Nav>
      <Challenge>
        <motion.div
          className="play-btn-container"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.4,
              delay: 1
            }
          }}
        >
          <motion.img
            src={play}
            alt="play icon"
            whileHover={{ opacity: 0.8 }}
            animate={{
              scale: [1, 1.1, 1],
              transition: { repeat: Infinity, duration: 2 }
            }}
          />
        </motion.div>
      </Challenge>
      <About>
        <div className="page">
          <section>
            <h1>
              Startpass <br />
              <span>Challenge</span>
            </h1>
            <h3>
              Complete real world challenges and build team
              stories with friends or family!
            </h3>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.4 }
              }}
              class="btn-primary"
            >
              Start Today!
            </motion.button>
            <button className="btn-close">X</button>
          </section>
        </div>
      </About>
    </div>
  );
};

export default Home;

const Nav = styled(motion.nav)`
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  height: 8vh;
  .nav-contents {
    .logo-container {
      height: 32px;
      width: 172px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      ${token.layout.media.tablet} {
        height: 40px;
        width: 192px;
        img {
          width: 100%;
        }
      }
      ${token.layout.media.desktop} {
        height: 51.6px;
        width: 275.2px;
        img {
          width: 80%;
        }
      }
    }
    .about-btn-container {
      position: absolute;
      right: 0%;
      top: 50%;
      transform: translateY(-50%);
      .about-btn {
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.1);
        width: 48px;
        height: 48px;
        border-radius: 19px;
      }
    }
  }
`;

const Challenge = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const About = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  overflow: scroll;
  .page {
    border-radius: 24px 24px 0 0;
    background: white;
    padding: 3.2rem;
    text-align: center;
    max-width: 1200px;
    min-height: 200vh;
    margin: 12vh auto 0rem auto;
  }
`;
